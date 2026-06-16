import { ArrowLeftRight } from "lucide-react";
import { ConverterDateForm } from "../_Components";
import { Metadata } from "next";
export const metadata:Metadata={
title: "محول التاريخ الإسلامي",
  description: "أداة ذكية ودقيقة للتحويل بين التاريخ الهجري والميلادي بالتفصيل، مع احتساب الفوارق الفلكية وعرض المناسبات الدينية الموافقة للتاريخ بسهولة.",
}
export default function DateConverterPage() {
  return (
    <>
      <div className="w-full max-w-4xl mx-auto p-4 space-y-6" dir="rtl">
      
      <div className="text-center md:text-right space-y-1 border-b border-slate-100 dark:border-slate-800 pb-4">
        <h2 className="text-2xl font-black text-slate-800 dark:text-slate-100 flex items-center justify-center md:justify-start gap-2">
          <ArrowLeftRight className="h-5 w-5 text-emerald-600" />
          محول التاريخ الإسلامي
        </h2>
        <p className="text-sm text-muted-foreground">
          حول التواريخ بدقة وسهولة بين النظامين الهجري والميلادي مع استكشاف المناسبات الدينية الموافقة لها.
        </p>
      </div>

      <ConverterDateForm />
      
    </div>
    </>
  )
}
