"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Loader2, X } from "lucide-react"
import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { useEffect, useState, useTransition } from "react"

export default function AsmaaInput() {
  const pathname = usePathname()
  const router = useRouter()
  const searchParams = useSearchParams()
  const [isPending, startTransition] = useTransition()
  
  const currentQuery = searchParams.get("query") || ""
  // حالة محلية للكتابة الفورية دون انتظار الـ Server Component
  const [localValue, setLocalValue] = useState(currentQuery)

  // مزامنة الحالة المحلية إذا تغير الرابط من الخارج (مثل زر الإلغاء)
  useEffect(() => {
    setLocalValue(currentQuery)
  }, [currentQuery])

  // تطبيق الـ Debounce لتأخير تحديث الـ URL
  useEffect(() => {
    const timer = setTimeout(() => {
      if (localValue === currentQuery) return

      const params = new URLSearchParams(searchParams.toString())
      if (localValue.trim()) {
        params.set("query", localValue.trim())
      } else {
        params.delete("query")
      }

      startTransition(() => {
        router.replace(`${pathname}?${params.toString()}`, { scroll: false })
      })
    }, 400) // التأخير بـ 400 مللي ثانية

    return () => clearTimeout(timer)
  }, [localValue, pathname, router, searchParams, currentQuery])

  return (
    <div className="max-w-md mx-auto relative">
      <Input
        type="text"
        placeholder="ابحث بالاسم، المعنى، أو الرقم..."
        value={localValue}
        onChange={(e) => setLocalValue(e.target.value)}
        className="h-12 text-right pl-12 pr-4 border-emerald-100 focus-visible:ring-emerald-600 rounded-xl bg-white text-black"
      />
      
      {/* مؤشر التحميل وإلغاء البحث في الجهة اليسرى (الـ Input موجه لليمين) */}
      <div className="absolute left-3 top-1/2 -translate-y-1/2 flex items-center gap-2">
        {isPending && (
          <Loader2 className="h-4 w-4 animate-spin text-emerald-600" />
        )}
        {localValue && !isPending && (
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setLocalValue("")}
            className="h-7 w-7 text-muted-foreground hover:text-foreground rounded-full"
          >
            <X className="h-4 w-4" />
          </Button>
        )}
      </div>
    </div>
  )
}