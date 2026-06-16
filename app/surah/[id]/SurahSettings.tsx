
import { Suspense } from "react"
import { SurahSettingsContent } from "@/app/_Components"



export default function SurahSettings() {
  return (
    <Suspense fallback={
      <div className="bg-white p-4 rounded-xl border border-slate-200/80 animate-pulse h-16 w-full" />
    }>
      <SurahSettingsContent />
    </Suspense>
  )
}