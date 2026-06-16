import { TPrayerConstant } from "@/constants/prayer"

type TPrayerTimeListProps=TPrayerConstant &{
      isNext:boolean,
      time:string
}
export default function PrayerTimeList({isNext,icon:Icon,iconStyle,label,time}:TPrayerTimeListProps) {
  return (
    <>
           <div  className={`flex items-center justify-between px-4 sm:px-6 py-3 ${isNext ? 'bg-emerald-50/40 dark:bg-emerald-950/10 font-bold' : ''}`}>
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-slate-50 dark:bg-slate-800 rounded-lg">
                    <Icon className={`h-4 w-4 ${iconStyle}`} />
                  </div>
                  <span className="text-slate-800 dark:text-slate-200 text-sm">{label}</span>
                  {isNext && <span className="bg-emerald-100 text-emerald-800 dark:bg-emerald-900/40 dark:text-emerald-400 text-[10px] px-2 py-0.5 rounded-full">التالية</span>}
                </div>
                <span className="text-slate-700 dark:text-slate-300 font-mono">{time}</span>
              </div>
    </>
  )
}
