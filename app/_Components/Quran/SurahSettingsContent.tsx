"use client"
import useSurahSettings from "@/app/surah/[id]/useSurahSettings"
import { Slider } from "@/components/ui/slider"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Eye, Type } from "lucide-react"

export default function SurahSettingsContent() {
const {
        currentSize,
        currentTheme,
        updateParams
  }=useSurahSettings()
  return (
    <div className="bg-white p-4 rounded-xl border border-slate-200/80 shadow-xs flex flex-col sm:flex-row gap-4 items-center justify-between font-sans">
      {/* التحكم بحجم الخط */}
      <div className="flex items-center gap-3 w-full sm:w-1/2">
        <Type className="h-4 w-4 text-slate-400 shrink-0" />
        <span className="text-xs text-slate-500 whitespace-nowrap">حجم الخط ({currentSize}px)</span>
        <Slider
          value={[currentSize]}
          min={18}
          max={42}
          step={2}
onValueChange={(value) => {
  const size = Array.isArray(value) ? value[0] : value
  updateParams("size", size)
}}          className="cursor-pointer"
        />
      </div>

      {/* التحكم بلون خلفية ورق القراءة */}
      <div className="flex items-center gap-2 shrink-0">
        <Eye className="h-4 w-4 text-slate-400" />
        <span className="text-xs text-slate-500 pl-1">ورق القراءة</span>
        <Tabs value={currentTheme} onValueChange={(val) => updateParams("theme", val)}>
          <TabsList className="bg-slate-100 p-0.5 h-8">
            <TabsTrigger value="white" className="text-xs h-7 px-2.5">أبيض</TabsTrigger>
            <TabsTrigger value="cream" className="text-xs h-7 px-2.5 data-[state=active]:bg-amber-100/70 data-[state=active]:text-amber-900">كريمي</TabsTrigger>
            <TabsTrigger value="gray" className="text-xs h-7 px-2.5">رمادي</TabsTrigger>
          </TabsList>
        </Tabs>
      </div>
    </div>
  )
}