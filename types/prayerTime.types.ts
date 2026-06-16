 type THijiriDate={
    date:string,
    day:string,
    weekday:{
        en:string,
        ar:string,
    }
    month: {
         number: number,
         en: string,
         ar: string,
         days: 29
    },
     year: string,
}

export type TPrayerTimings={
     Fajr: string,
     Sunrise: string,
     Dhuhr: string,
     Asr: string,
     Sunset:string,
     Maghrib: string,
     Isha: string,
}
export type TNextPrayer={
     currentPrayer: string,
     nextPrayer: string,//next prayer name
     duration: string,//time left
     timing: string,//next prayer time
  
}
export type TPrayerTimingsResponse= {
  code: number;
  status: string;
  data: {
    timings: TPrayerTimings;
  };
}
export type TNextPrayerResponse={
      code: string,
      status: string,
      data: {
      timings: {
         [prayerName:string]:string
        },
        date:{
            readable: string,
            hijri:THijiriDate
        }
    }
}
export type TLocationResponse={
    address:{
        city:string,
        country:string
    }
}
export type TPrayerTimesApiResponse={
      timings:TPrayerTimings,
       hijri:THijiriDate,
      readableDate:string,
       nextPrayer:{
         name:string,
         time:string
        },
        location:TLocationResponse
}
export type TCalenderDayData={
    timings:TPrayerTimings,
    date:{
        readable:string,
        gregorian:{
            date:string,
            weekday:{
                en:string
            }
        }
        hijri:THijiriDate
     
    }
}