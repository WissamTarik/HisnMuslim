import { Empty } from '../_Components'
import { CalendarDays } from 'lucide-react'

export default function NoSpecialDays() {
  return (
    <>
      <div className="container mx-auto p-4 md:p-8 space-y-8" dir="rtl">
        <div className="text-center md:text-right space-y-2 border-b border-slate-100 dark:border-slate-800 pb-6">
          <h1 className="text-3xl font-black text-slate-950 dark:text-white flex items-center justify-center md:justify-start gap-3">
            <CalendarDays className="h-8 w-8 text-emerald-600" />
            موسوعة الأيام والمناسبات الإسلامية
          </h1>
        </div>

        {/* استدعاء مكون الـ Empty الخاص بك هنا */}
        <Empty 
          title="لا توجد مناسبات" 
          description="تعذر تحميل البيانات." 
        />
      </div>
    </>
  )
}
