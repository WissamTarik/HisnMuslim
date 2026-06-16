"use server"
import { TCalenderDayData, TLocationResponse, TNextPrayerResponse, TPrayerTimesApiResponse, TPrayerTimingsResponse } from "@/types/prayerTime.types"
import { headers } from "next/headers";
 function getFormattedDate() {
  return new Intl.DateTimeFormat("en-GB")
    .format(new Date())
    .replace(/\//g, "-");
}
export async function getPrayerDataByCoordsAction(latitude:number,longitude:number):Promise<TPrayerTimesApiResponse> {
 
    const date=getFormattedDate()
    const headerList=await headers()
    const userAgent=headerList.get("user-agent")||"MyPrayerTimeApp/1.0"
const [timingResponse, nextPrayerResponse] = await Promise.all([
  fetch(
    `https://api.aladhan.com/v1/timings/${date}?latitude=${latitude}&longitude=${longitude}`
  ),
  fetch(
    `https://api.aladhan.com/v1/nextPrayer/${date}?latitude=${latitude}&longitude=${longitude}`
  ),
]);
    if(!timingResponse.ok||!nextPrayerResponse.ok){
        throw new Error("Failed to fetch data")
    }
   const timingJson:TPrayerTimingsResponse= await timingResponse.json()
   const nextPrayerJson:TNextPrayerResponse= await nextPrayerResponse.json()
   let locationJson = null;

try {

  const locationResponse = await fetch(
    `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`,
    {
      headers: {
        "User-Agent": userAgent,
      },
      next:{
            revalidate:86400

      }
    }
  );

  if (locationResponse.ok) {
    locationJson = await locationResponse.json();
  }
} catch (error) {
  console.error("Location fetch failed", error);
}
   const [nextPrayerName,nextPrayerTime]=Object.entries(nextPrayerJson.data.timings)[0]
   const address = locationJson?.address;
   const detectedCity = address ? (address.city || address.town || address.village || address.county || address.state) : null;
   return{
    timings:timingJson.data.timings,
    hijri:nextPrayerJson.data.date.hijri,
    readableDate:nextPrayerJson.data.date.readable,
    nextPrayer:{
        name:nextPrayerName,
        time:nextPrayerTime
    },
location:
  locationJson ??
  {
    address: {
        city: detectedCity || "اسكند",    },
  }   }
}
export async function getPrayerCalendarAction(latitude:number,longitude:number,fromDate:string,toDate:string):Promise<TCalenderDayData[]> {
    try {
        const response=await fetch(`https://api.aladhan.com/v1/calendar/from/${fromDate}/to/${toDate}?latitude=${latitude}&longitude=${longitude}` )
        if(!response.ok){
            throw new Error(`Aladhan Calendar API error: ${response.status}`)
        }
        const json=await response.json()
        return json.data as TCalenderDayData[]
    } catch (error) {
        console.error("Error in getPrayerCalendarAction:", error)
        throw new Error("فشل في جلب تقويم مواقيت الصلاة")
    }
    
}