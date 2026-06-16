import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Compass, Home, MoveRight, HelpCircle } from "lucide-react";

export default function NotFound() {
  return (
    <div 
      className="min-h-[85vh] w-full flex flex-col items-center justify-center p-4 md:p-8 text-center bg-slate-50/50 dark:bg-slate-950/20"
      dir="rtl"
    >
      <div className="max-w-md w-full space-y-6 relative isolate">
        
        {/* خلفية جمالية خفيفة خلف الأيقونة */}
        <div className="absolute inset-0 -z-10 flex items-center justify-center blur-3xl opacity-20 dark:opacity-10 pointer-events-none">
          <div className="h-40 w-40 rounded-full bg-emerald-600 animate-pulse"></div>
        </div>

        {/* القسم البصري (أيقونة البوصلة ترمز للتيه وضياع الوجهة) */}
        <div className="relative flex items-center justify-center mx-auto h-24 w-24 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-xs">
          <Compass className="h-12 w-12 text-emerald-600 dark:text-emerald-500 animate-spin animation-duration-[10s]" />
          <span className="absolute -top-1.5 -right-1.5 flex h-4 w-4">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-4 w-4 bg-amber-500 items-center justify-center text-[9px] font-bold text-white">!</span>
          </span>
        </div>

        {/* نصوص لوحة العرض */}
        <div className="space-y-2">
          {/* رقم الخطأ بنمط خط عريض ومميز */}
          <h1 className="text-7xl font-black tracking-tight text-slate-300 dark:text-slate-800 font-mono select-none">
            404
          </h1>
          <h2 className="text-xl font-black text-slate-900 dark:text-white">
            عذراً، هذه الصفحة غير موجودة!
          </h2>
          <p className="text-sm text-muted-foreground leading-relaxed">
            يبدو أنك ضللت الطريق أو أن الرابط الذي اتبعته قد تم نقله أو حذفه بالكامل. لا بأس، يمكنك العودة والبدء من جديد.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 pt-2">
          {/* زر العودة للرئيسية */}
          <Button 
            className="bg-emerald-600 py-3 justify-center items-center  hover:bg-emerald-700 text-white font-bold gap-2 cursor-pointer w-full sm:flex-1"
          >
            <Link href="/">
              <Home className="h-4 w-4 text-center " />
              العودة للرئيسية
            </Link>
          </Button>

          {/* زر بديل للتواصل أو الدعم */}
          <Button 
            variant="outline" 
            
            className="border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-900 w-full sm:flex-1"
          >
            <Link href="/help" className="gap-2">
              <HelpCircle className="h-4 w-4 text-slate-500" />
              مساعدة
            </Link>
          </Button>
        </div>

        {/* رابط نصي ذكي إضافي */}
        <div className="pt-4 border-t border-slate-100 dark:border-slate-900">
          <Link 
            href="/special-days" 
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-600 dark:text-emerald-400 hover:underline transition-all"
          >
            الانتقال إلى موسوعة المناسبات الإسلامية
            <MoveRight className="h-3.5 w-3.5 rotate-180" />
          </Link>
        </div>

      </div>
    </div>
  );
}