import { Card, CardContent } from '@/components/ui/card'
import { CalendarX } from 'lucide-react'
type TEmptyProps= {
  title?: string;
  description?: string;
  className?: string;
}
export default function Empty({title = "لا توجد بيانات متاحة", 
  description = "عذراً، لم نتمكن من العثور على أي بيانات للعرض حالياً.",
  className = "py-14"}:TEmptyProps) {
  return (
    <>
     <Card className={`w-full max-w-3xl mx-auto border-slate-200 dark:border-slate-800 shadow-xs border-dashed bg-slate-50/50 dark:bg-slate-900/50 ${className}`}>
      <CardContent className="flex flex-col items-center justify-center gap-3 text-center p-6">
        <div className="p-3 bg-slate-100 dark:bg-slate-800 rounded-full text-slate-400">
          <CalendarX className="h-6 w-6" />
        </div>
        <div className="space-y-1">
          <h3 className="font-bold text-slate-700 dark:text-slate-300">{title}</h3>
          <p className="text-sm text-muted-foreground">{description}</p>
        </div>
      </CardContent>
    </Card> 
    </>
  )
}
