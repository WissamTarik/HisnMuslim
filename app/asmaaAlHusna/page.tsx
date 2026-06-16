import { getAsmaAlHusnaAction } from "@/actions/asmaAlHusna.actions"
import { Suspense } from "react"
import AsmaaInput from "./AsmaaInput"
import ShadcnSkeleton from "@/skeletons/ShadcnSkeleton/ShadcnSkeleton"
import { Metadata } from "next"
import AsmaaGrid from "./AsmaaGrid"

export const metadata: Metadata = {
  title: "أسماء الله الحسنى",
  description: "تصفح أسماء الله الحسنى التسعة والتسعين مع معانيها وشرح مبسط يساعد على التدبر والفهم.",
}

export default async function AsmaAlHusnaPage() {
  try {
    const allNames = await getAsmaAlHusnaAction();

    return (
      <div className="max-w-6xl mx-auto p-6 min-h-screen space-y-8" dir="rtl">
        <header className="text-center space-y-2">
          <h1 className="text-4xl font-extrabold text-emerald-800 tracking-tight">أسماء الله الحسنى</h1>
          <p className="text-muted-foreground max-w-prose mx-auto text-sm">
            تصفح وابحث في أسماء الله الحسنى ومعانيها ببيئة معالجة برمجية كاملة على الخادم.
          </p>
        </header>

        <div className="max-w-md mx-auto">
          <Suspense fallback={<ShadcnSkeleton variant="list" count={1} />}>
            <AsmaaInput />
          </Suspense>
        </div>

        <Suspense fallback={<ShadcnSkeleton variant="card" count={6} />}>
          <AsmaaGrid names={allNames} />
        </Suspense>     
      </div>
    );
  } catch (error) {
    return (
      <div className="text-center py-24 text-destructive font-medium" dir="rtl">
        حدث خطأ أثناء تحميل البيانات. يرجى المحاولة لاحقاً.
      </div>
    );
  }
}