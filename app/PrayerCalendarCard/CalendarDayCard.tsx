import { Card, CardContent } from "@/components/ui/card"
import { PRAYERS_CONFIG } from "@/constants/prayer"
import { TCalenderDayData } from "@/types/prayerTime.types"
import { HijriDateCard } from "../_Components"
import { cleanTimeStr } from "@/utils/prayer-utils"

 type TCalendarDayCardProps={
   data:TCalenderDayData[],
}
export default function CalendarDayCard({data}:TCalendarDayCardProps) {
  return (
    <>
      <div className="grid grid-cols-1 gap-4 md:hidden">
      {data.map((day, idx) => (
        <Card key={idx} className="bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 shadow-xs flex flex-col overflow-hidden">
          <HijriDateCard 
            weekday={day.date.hijri.weekday.ar}
            day={day.date.hijri.day}
            month={day.date.hijri.month.ar}
            year={day.date.hijri.year}
            readableDate={day.date.readable}
            cityName="موقعك المحدد"
            className="border-0 border-b rounded-none bg-slate-50/60 dark:bg-slate-800/40 shadow-none py-3"
          />
          <CardContent className="p-4 space-y-2.5 flex-1">
            {PRAYERS_CONFIG.map((prayer) => (
              <div key={prayer.key} className="flex justify-between items-center text-sm border-b border-dashed border-slate-100 dark:border-slate-800/60 pb-1.5 last:border-0 last:pb-0">
                <div className="flex items-center gap-2">
                  <prayer.icon className={`h-3.5 w-3.5 ${prayer.iconStyle}`} />
                  <span className="text-slate-600 dark:text-slate-400">{prayer.label}</span>
                </div>
                <span className="font-mono font-bold text-slate-800 dark:text-slate-200">
                  {cleanTimeStr(day.timings[prayer.key])}
                </span>
              </div>
            ))}
          </CardContent>
        </Card>
      ))}
    </div>
    </>
  )
}
