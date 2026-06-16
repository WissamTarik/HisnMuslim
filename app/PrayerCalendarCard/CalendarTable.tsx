import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { PRAYERS_CONFIG } from "@/constants/prayer"
import { TCalenderDayData } from "@/types/prayerTime.types"
import { cleanTimeStr } from "@/utils/prayer-utils"

 type TCalendarTableProps={
   data:TCalenderDayData[],
}
export default function CalendarTable({data}:TCalendarTableProps) {
  return (
    <>
      <div className="hidden md:block bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-xs">
      <Table>
        <TableHeader className="bg-slate-50 dark:bg-slate-800/50">
          <TableRow>
            <TableHead className="text-right font-bold text-slate-800 dark:text-slate-200">التاريخ (ميلادي / هجري)</TableHead>
            {PRAYERS_CONFIG.map((prayer) => (
              <TableHead key={prayer.key} className="text-center font-bold text-slate-800 dark:text-slate-200">
                <div className="flex items-center justify-center gap-1.5">
                  <prayer.icon className={`h-3.5 w-3.5 ${prayer.iconStyle}`} />
                  {prayer.label}
                </div>
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((day, idx) => (
            <TableRow key={idx} className="hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors">
              <TableCell className="font-medium text-right py-3">
                <div className="flex flex-col">
                  <span className="text-slate-800 dark:text-slate-200 font-semibold">{day.date.readable}</span>
                  <span className="text-xs text-slate-400 font-mono">
                    {day.date.hijri.day} {day.date.hijri.month.ar}، {day.date.hijri.year}
                  </span>
                </div>
              </TableCell>
              {PRAYERS_CONFIG.map((prayer) => (
                <TableCell key={prayer.key} className="text-center font-mono font-bold text-slate-700 dark:text-slate-300">
                  {cleanTimeStr(day.timings[prayer.key])}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
    </>
  )
}
