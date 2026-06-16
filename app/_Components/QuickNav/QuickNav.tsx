"use client"

import { Button } from "@/components/ui/button"
import { Sparkles, Calendar, Compass } from "lucide-react"

interface QuickNavProps {
  currentMonth: number
  onNavigate: (monthNum: number) => void 
}

export function QuickNav({ currentMonth, onNavigate }: QuickNavProps) {
  const navItems = [
    { label: "محرم", num: 1 },
    { label: "رمضان", num: 9, special: true },
    { label: "ذو الحجة", num: 12 },
  ]

  return (
    <>
      <div className="flex items-center gap-2 text-xs font-bold text-slate-500 mb-1">
        <Compass className="h-3.5 w-3.5 text-emerald-600" />
        <span>انتقال سريع لأبرز الشهور:</span>
      </div>

      <div className="flex flex-wrap gap-2">
        {currentMonth > 0 && (
          <Button
            variant="secondary"
            size="sm"
            onClick={() => onNavigate(currentMonth)} // Declarative call
            className="text-xs font-black bg-amber-500 hover:bg-amber-600 text-white cursor-pointer gap-1"
          >
            <Calendar className="h-3 w-3" />
            الانتقال للشهر الحالي الهجري
          </Button>
        )}

        {navItems.map((item) => (
          <Button
            key={item.num}
            variant={item.special ? "default" : "outline"}
            size="sm"
            onClick={() => onNavigate(item.num)} 
            className={`text-xs font-bold transition-all cursor-pointer ${
              item.special 
                ? "bg-emerald-600 hover:bg-emerald-700 text-white" 
                : "border-slate-200 dark:border-slate-800 hover:border-emerald-500 hover:text-emerald-600"
            }`}
          >
            {item.special && <Sparkles className="h-3 w-3 ml-1" />}
            {item.label}
          </Button>
        ))}
      </div>
    </>
  )
}