import { Card, CardContent } from "@/components/ui/card";
import { TSurahReferences } from "@/types/quran.types";
import { Compass, Layers, MapPin } from "lucide-react";
type TQuranStatisticsProps={
    surahs:TSurahReferences[]|null
}
export default function QuranStatistics({surahs}:TQuranStatisticsProps) {
      const totalSurahs = surahs?.length || 0
  const meccanCount = surahs?.filter((s) => s.revelationType === "Meccan").length || 0
  const medinanCount = totalSurahs - meccanCount
  return (
    <>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-4xl mx-auto font-sans">
          <Card className="bg-white border-slate-200/80 shadow-xs relative overflow-hidden">
            <CardContent className="p-4 flex items-center justify-between">
              <div className="space-y-1 text-right">
                <p className="text-xs font-medium text-slate-400">إجمالي السور</p>
                <p className="text-2xl font-bold text-slate-800 font-mono">{totalSurahs}</p>
              </div>
              <div className="p-3 bg-emerald-50 rounded-xl border border-emerald-100 text-emerald-600">
                <Layers className="h-5 w-5" />
              </div>
            </CardContent>
            <div className="absolute bottom-0 inset-x-0 h-1 bg-emerald-500" />
          </Card>

          <Card className="bg-white border-slate-200/80 shadow-xs relative overflow-hidden">
            <CardContent className="p-4 flex items-center justify-between">
              <div className="space-y-1 text-right">
                <p className="text-xs font-medium text-slate-400">السور المكية</p>
                <p className="text-2xl font-bold text-amber-700 font-mono">{meccanCount}</p>
              </div>
              <div className="p-3 bg-amber-50 rounded-xl border border-amber-100 text-amber-600">
                <Compass className="h-5 w-5" />
              </div>
            </CardContent>
            <div className="absolute bottom-0 inset-x-0 h-1 bg-amber-500" />
          </Card>

          <Card className="bg-white border-slate-200/80 shadow-xs relative overflow-hidden">
            <CardContent className="p-4 flex items-center justify-between">
              <div className="space-y-1 text-right">
                <p className="text-xs font-medium text-slate-400">السور المدنية</p>
                <p className="text-2xl font-bold text-blue-700 font-mono">{medinanCount}</p>
              </div>
              <div className="p-3 bg-blue-50 rounded-xl border border-blue-100 text-blue-600">
                <MapPin className="h-5 w-5" />
              </div>
            </CardContent>
            <div className="absolute bottom-0 inset-x-0 h-1 bg-blue-500" />
          </Card>
        </div>
    </>
  )
}
