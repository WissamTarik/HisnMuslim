import { Loader2, Calendar } from "lucide-react";

export default function GlobalLoading() {
  return (
    <div 
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-slate-50/80 dark:bg-slate-950/90 backdrop-blur-xs p-4 text-center"
      dir="rtl"
    >
      <div className="relative flex items-center justify-center mb-4">
        {/* حلقة التحميل الخارجية الدوارة */}
        <Loader2 className="h-16 w-16 text-emerald-600 animate-spin absolute" />
        {/* أيقونة التطبيق الثابتة في المنتصف لإعطاء هوية بصرية */}
        <Calendar className="h-6 w-6 text-emerald-500" />
      </div>
      
      <h2 className="text-md font-bold text-slate-800 dark:text-slate-200 animate-pulse">
        جاري تحميل البيانات...
      </h2>
      <p className="text-xs text-muted-foreground mt-1 max-w-xs">
        نعمل على تهيئة الواجهة وجلب التواريخ والمناسبات بدقة، يرجى الانتظار لحظة.
      </p>
    </div>
  );
}