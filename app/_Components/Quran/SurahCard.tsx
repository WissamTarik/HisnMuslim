import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader } from "@/components/ui/card" // استيراد كروت Shadcn
import { TSurahReferences } from "@/types/quran.types"
import Link from "next/link"

type TSurahCardProps = TSurahReferences

export default function SurahCard({ name, number, englishName, revelationType, numberOfAyahs }: TSurahCardProps) {
  return (
    <Link href={`/surah/${number}`} className="block group">
      <Card className="bg-white rounded-2xl border border-slate-200 p-5 font-serif text-right flex flex-col justify-between gap-3 cursor-pointer hover:-translate-y-1 hover:shadow-lg hover:border-emerald-200/80 transition-all duration-300 active:scale-[0.99] relative overflow-hidden">
        
        {/* السطر الأول: الاسم والرقم */}
        <div className="flex items-center justify-between w-full">
          <h2 className="font-bold text-slate-800 text-lg group-hover:text-emerald-700 transition-colors">
            {name}
          </h2>
          <span className="text-xs font-sans font-bold text-slate-400 bg-slate-50 border border-slate-100 rounded-lg px-2 py-0.5 group-hover:bg-emerald-50 group-hover:text-emerald-700 group-hover:border-emerald-100 transition-colors">
            #{number}
          </span>
        </div>

        {/* السطر الثاني: الاسم الإنجليزي */}
        <div className="text-right font-sans text-xs text-slate-400 font-medium tracking-wide">
          {englishName}
        </div>

        {/* السطر الثالث: عدد الآيات والـ Badge */}
        <div className="flex items-center gap-2 pt-1 border-t border-slate-50 font-sans text-[11px] text-slate-500 z-10">
          <span className="font-medium">{numberOfAyahs} آيات</span>
          <span className="text-slate-300">•</span>
          
          {revelationType === "Meccan" ? (
            <Badge 
              variant="secondary" 
              className="bg-amber-50 text-amber-700 border-amber-100/70 text-[10px] font-medium px-2 py-0"
            >
              مكية
            </Badge>
          ) : (
            <Badge 
              variant="secondary" 
              className="bg-blue-50 text-blue-700 border-blue-100/70 text-[10px] font-medium px-2 py-0"
            >
              مدنية
            </Badge>
          )}
        </div>

        {/* تأثير العلامة المائية */}
        <div className="absolute -left-5 -bottom-5 text-6xl text-emerald-600/5 font-serif select-none pointer-events-none group-hover:scale-110 transition-transform duration-300">
          ﷽
        </div>
      </Card>
    </Link>
  )
}