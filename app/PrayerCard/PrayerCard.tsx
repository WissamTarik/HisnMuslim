"use client"

import { Card, CardContent } from "@/components/ui/card";
import {  TPrayerTimings } from "@/types/prayerTime.types";
import { Empty, HijriDateCard, Loading } from "../_Components";
import { PRAYERS_CONFIG } from "@/constants/prayer";
import NextPrayerCard from "./NextPrayerCard";
import PrayerTimeList from "./PrayerTimeList";
import PrayerCardCTA from "./PrayerCardCTA";
import usePrayerCard from "./usePrayerCard";

export default function PrayerCard() {
 const {
    remainingTime,
    isLoading,
    data
  }=usePrayerCard()
  if (isLoading) {
    return (
<Loading 
        variant="list" 
        count={5} 
        message="جاري تحديد موقعك الجغرافي وحساب مواقيت الصلاة بدقة..." 
        className="py-10"
      />
        );
  }

  if (!data) return (
    <Empty 
      title="تعذر جلب مواقيت اليوم" 
      description="يرجى التحقق من تفعيل صلاحيات الموقع أو اضغط تحديث للمحاولة مرة أخرى."
    />
  );

  return (
    <div className="w-full max-w-3xl mx-auto px-4 space-y-4" dir="rtl">
      
        <HijriDateCard 
          weekday={data.hijri.weekday.ar}
          day={data.hijri.day}
          month={data.hijri.month.ar}
          year={data.hijri.year}
          readableDate={data.readableDate}
          cityName={data.location.address.city || "القاهرة"}
        />
      

      <NextPrayerCard 
        nextPrayer={data.nextPrayer} 
        remainingTime={remainingTime}
      />

      <Card className="bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 shadow-sm">
        <CardContent className="p-0 divide-y divide-slate-100 dark:divide-slate-800/60">
          {PRAYERS_CONFIG.map((prayer) => {
            const isNext = data.nextPrayer.name === prayer.key;
            const time = data.timings[prayer.key as keyof TPrayerTimings];
            return (
              <PrayerTimeList {...prayer} isNext={isNext} time={time} key={prayer.key}/>
            );
          })}
        </CardContent>
      </Card>

  <PrayerCardCTA/>
    </div>
  )
}