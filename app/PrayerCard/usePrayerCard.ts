import { getPrayerDataByCoordsAction } from "@/actions/prayerTimes.actions";
import { useGetGeoLocation } from "@/hooks";
import { TPrayerTimesApiResponse } from "@/types/prayerTime.types";
import { getRemainingTime } from "@/utils/prayer-utils";
import { useEffect, useState } from "react";

export default function usePrayerCard() {
   const { getUserLocation, latitude, longitude, locationType: geoLocType } = useGetGeoLocation();
    const [data, setData] = useState<TPrayerTimesApiResponse | null>(null);
    const [remainingTime, setRemainingTime] = useState("");
    const [isLoading, setIsLoading] = useState(false);
  
    async function fetchData(latitude: number, longitude: number) {
      if (!latitude || !longitude) return;
      try {
        setIsLoading(true);
        const result = await getPrayerDataByCoordsAction(latitude, longitude);
        
        setData(result);
      } catch (error) {
        console.error("Error fetching prayer times:", error);
      } finally {
        setIsLoading(false);
      }
    }
  
  
    useEffect(() => { 
      getUserLocation(); 
    }, []);
  
    useEffect(() => { 
      if (latitude && longitude) fetchData(latitude, longitude); 
    }, [latitude, longitude]);
  
    useEffect(() => {
      if (!data) return;
      function updateTimer() {
        const result = getRemainingTime(data?.nextPrayer.time as string);
        setRemainingTime(result);
      }
      updateTimer();
      const interval = setInterval(updateTimer, 1000);
      return () => clearInterval(interval);
    }, [data]);
  
  return {
    remainingTime,
    geoLocType,
    isLoading,
    data
  }
}
