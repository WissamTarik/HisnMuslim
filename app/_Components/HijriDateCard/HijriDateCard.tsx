
import { Calendar, MapPin } from "lucide-react";

type HijriDateCardProps = {
  weekday: string;
  day: string;
  month: string;
  year: string;
  readableDate: string;
  cityName: string;
  className?: string;
};

export default function HijriDateCard({
  weekday,
  day,
  month,
  year,
  readableDate,
  cityName,
  className,
}: HijriDateCardProps) {
  return (
    <div 
      className={
        "w-full rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/60 backdrop-blur-md shadow-xs px-5 py-4 flex flex-col sm:flex-row justify-between gap-3 " + 
        (className || "")
      }
      dir="rtl"
    >
      <div className="flex items-center gap-2 text-slate-700 dark:text-slate-200 font-medium">
        <Calendar className="h-4 w-4 text-emerald-600" />
        <span>
          {weekday}، {day} {month} {year} هـ
        </span>
      </div>

      <div className="flex flex-col sm:items-end gap-1">
        <div className="flex items-center gap-1 text-xs text-slate-600 dark:text-slate-300">
          <MapPin className="h-3.5 w-3.5 text-emerald-600" />
          <span className="font-medium">{cityName}</span>
        </div>
        <div className="text-xs font-mono text-slate-500 dark:text-slate-400">
          الموافق: {readableDate}
        </div>
      </div>
    </div>
  );
}