import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { HIJRI_MONTHS } from '@/constants/months';
import { TSpecialDay } from '@/types/specialDays.types';
import SpecialEventItem from './SpecialEventItem';
type TSpecialMonthCardProps={
    monthNum:number,
    events:TSpecialDay[],
    currentHijriMonth:number
}
export default function SpecialMonthCard({monthNum,events,currentHijriMonth}:TSpecialMonthCardProps) {
  const isCurrentHijriMonth=monthNum===currentHijriMonth
  
    return (
    <>
            <Card 
            id={`month-${monthNum}`} 
className={`border transition-all duration-300 ${
        isCurrentHijriMonth 
          ? "border-emerald-500 ring-4 ring-emerald-500/10 shadow-md bg-emerald-50/5 dark:bg-emerald-950/5" 
          : "border-slate-200 dark:border-slate-800"
      }`}          >
            <CardHeader className="bg-slate-50 dark:bg-slate-950/40 border-b border-slate-100 dark:border-slate-800 py-3.5 px-4 flex flex-row items-center justify-between space-y-0">
              <CardTitle className="text-md font-extrabold text-slate-800 dark:text-slate-200 flex items-center gap-2">
                <span className="flex items-center justify-center h-7 w-7 rounded-full bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-400 text-xs font-mono font-bold">
                  {monthNum}
                </span>
                شهر {HIJRI_MONTHS[monthNum - 1]}
              </CardTitle>
              <span className="text-xs text-muted-foreground font-medium">
                {events.length} مناسبات
              </span>
            </CardHeader>

            {/* قائمة أحداث الشهر الفردية */}
            <CardContent className="p-0 divide-y divide-slate-100 dark:divide-slate-800/60">
              {events.map((event, idx) => <SpecialEventItem key={idx} {...event}/>)}
            </CardContent>
          </Card>
    </>
  )
}
