import { getPrayerCalendarAction } from "@/actions/prayerTimes.actions";
import { useGetGeoLocation } from "@/hooks";
import { TCalenderDayData } from "@/types/prayerTime.types";
import { format } from "date-fns";
import { useEffect, useState } from "react";
import { DateRange } from "react-day-picker";

export default function usePrayerCalendarCard() {
      const { getUserLocation, latitude, longitude } = useGetGeoLocation()
  const [calendarData, setCalendarData] = useState<TCalenderDayData[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isPopOver, setIsPopOver] = useState(false);
  const [dateRange, setDateRange] = useState<DateRange|undefined>({
    from: new Date(),
    to: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000)
  });

  const formatDate = (date: Date) => format(date, "dd-MM-yyyy");

  async function fetchCalendarRange(targetRange:DateRange) {
    if(!latitude||!longitude)return
    if(!targetRange.from||!targetRange.to)return
    if (targetRange?.from! > targetRange?.to!) return
    setIsLoading(true)
    try {
      const data = await getPrayerCalendarAction(
        latitude,
        longitude,
        formatDate(targetRange?.from!),
        formatDate(targetRange?.to!)
      )
      setCalendarData(data||[])                                   
    } catch (error) {
      
      console.error(error);
      setCalendarData([])
    } finally {
      setIsLoading(false)
    }
  }

  function handleDateChange(range:DateRange|undefined){
    setDateRange(range)
    if(range?.from&&range?.to){
      fetchCalendarRange(range)
      setIsPopOver(false)
    }
  }

  useEffect(() => { getUserLocation() }, []);
  useEffect(() => {
    if(latitude&&longitude&&dateRange?.from&&dateRange.to)
    fetchCalendarRange(dateRange)
  }, [latitude, longitude]);

  return{
    handleDateChange,
    isLoading,
    isPopOver,
    setIsPopOver,
    calendarData,
    dateRange
  }
}
