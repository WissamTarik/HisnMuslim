import { CalendarDays } from 'lucide-react'

export default function SpecialDaysHeader() {
  return (
    <>
         <div className="text-center md:text-right space-y-2 border-b border-slate-100 dark:border-slate-800 pb-6">
        <h1 className="text-3xl font-black text-slate-950 dark:text-white flex items-center justify-center md:justify-start gap-3">
          <CalendarDays className="h-8 w-8 text-emerald-600" />
          موسوعة الأيام والمناسبات الإسلامية
        </h1>
        <p className="text-sm text-muted-foreground">
          استكشف المواعيد والذكريات التاريخية والمناسبات الدينية الكبرى مقسمة حسب التقويم الهجري.
        </p>
      </div>
    </>
  )
}
