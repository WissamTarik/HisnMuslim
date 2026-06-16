import { TSpecialDay } from "@/types/specialDays.types"
import { formatEventName, isMajorEvent } from "@/utils/specialDays-utils";
import { Bookmark, Star } from "lucide-react";

export type TSpecialEventItemProps=TSpecialDay
export default function SpecialEventItem({name,day}:TSpecialDay) {
     const major = isMajorEvent(name);
    
  return (
    <>
         <div 
                    className={`p-3.5 flex items-start gap-3 transition-colors ${
                      major 
                        ? "bg-amber-50/40 dark:bg-amber-950/10 hover:bg-amber-50/70 dark:hover:bg-amber-950/20" 
                        : "hover:bg-slate-50/80 dark:hover:bg-slate-800/40"
                    }`}
                  >
                    {/* مربع عرض رقم اليوم الهجري */}
                    <div className={`shrink-0 flex flex-col items-center justify-center h-10 w-10 rounded-xl font-mono text-xs font-black border ${
                      major 
                        ? "bg-amber-100 text-amber-800 border-amber-200 dark:bg-amber-950/40 dark:text-amber-400 dark:border-amber-900/50" 
                        : "bg-slate-50 text-slate-700 border-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:border-slate-700"
                    }`}>
                      <span className="opacity-60 text-[9px] font-sans font-bold">يوم</span>
                      <span className="text-sm -mt-0.5">{day}</span>
                    </div>

                    {/* تفاصيل اسم الحدث والمناسبة */}
                    <div className="space-y-0.5 min-w-0">
                      <p className={`text-xs md:text-sm leading-relaxed font-semibold wrap-break-words ${
                        major ? "text-amber-950 dark:text-amber-300 font-bold" : "text-slate-800 dark:text-slate-200"
                      }`}>
                        {formatEventName(name)}
                      </p>
                      
                      <span className="inline-flex items-center gap-1 text-[10px] font-medium opacity-80">
                        {major ? (
                          <span className="text-amber-700 dark:text-amber-400 font-bold flex items-center gap-0.5">
                            <Star className="h-2.5 w-2.5 fill-current" /> مناسبة إسلامية كبرى
                          </span>
                        ) : (
                          <span className="text-slate-400 flex items-center gap-0.5">
                            <Bookmark className="h-2.5 w-2.5" /> ذكرى وتاريخ سلفي
                          </span>
                        )}
                      </span>
                    </div>
                  </div>
    </>
  )
}
