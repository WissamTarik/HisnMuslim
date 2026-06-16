"use client" 

import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { AlertTriangle, RefreshCw, Home } from "lucide-react";
import Link from "next/link";

type TErrorProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

export default function GlobalError({ error, reset }: TErrorProps) {
  useEffect(() => {
    console.error("Global App Error:", error);
  }, [error]);

  return (
    <div 
      className="min-h-[70vh] flex flex-col items-center justify-center p-6 text-center max-w-md mx-auto space-y-6"
      dir="rtl"
    >
      {/* أيقونة التنبيه الجذابة */}
      <div className="h-16 w-16 bg-red-50 dark:bg-red-950/30 border border-red-100 dark:border-red-900/50 rounded-2xl flex items-center justify-center text-red-600 dark:text-red-400 shadow-xs">
        <AlertTriangle className="h-8 w-8" />
      </div>

      <div className="space-y-2">
        <h1 className="text-xl font-black text-slate-900 dark:text-white">
          عذراً، حدث خطأ غير متوقع!
        </h1>
        <p className="text-sm text-muted-foreground leading-relaxed">
          لم نتمكن من معالجة طلبك حالياً. قد يكون هناك مشكلة في الاتصال بالخادم أو البيانات المستلمة.
        </p>
      </div>

      {/* أزرار التحكم المتجاوبة */}
      <div className="flex flex-col sm:flex-row gap-3 w-full justify-center">
        {/* زر إعادة المحاولة */}
        <Button 
          onClick={() => reset()}
          className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold gap-2 cursor-pointer w-full sm:w-auto"
        >
          <RefreshCw className="h-4 w-4" />
          إعادة المحاولة
        </Button>

        {/* زر العودة للرئيسية كخيار بديل في حال استمرار الخطأ */}
        <Button 
          variant="outline" 
          
          className="border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-900 w-full sm:w-auto"
        >
          <Link href="/">
            <Home className="h-4 w-4 ml-2" />
            الرئيسية
          </Link>
        </Button>
      </div>
      
      {error.digest && (
        <p className="text-[10px] font-mono text-slate-400 dark:text-slate-600 select-all">
          Error Digest: {error.digest}
        </p>
      )}
    </div>
  );
}