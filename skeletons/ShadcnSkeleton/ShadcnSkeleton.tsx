import { Skeleton } from "@/components/ui/skeleton"
import { Card, CardContent } from "@/components/ui/card"

type TSkeletonProps = {
  variant?: "card" | "list" | "page" | "stats"
  count?: number // عدد العناصر المراد تكرارها (مفيد للقوائم والكروت)
}

export default function ShadcnSkeleton({ variant = "card", count = 1 }: TSkeletonProps) {
  // 1. هيكل كارت تفاعلي (Card Skeleton)
  const renderCard = () => (
    <Card className="rounded-2xl border border-slate-200 p-5 flex flex-col justify-between gap-4 h-36.25 w-full bg-white animate-pulse">
      <div className="flex items-center justify-between w-full">
        <Skeleton className="h-5 w-24 bg-slate-100" />
        <Skeleton className="h-5 w-10 bg-slate-100 rounded-lg" />
      </div>
      <Skeleton className="h-3 w-32 bg-slate-100" />
      <div className="flex items-center gap-2 pt-2 border-t border-slate-50 w-full">
        <Skeleton className="h-3 w-16 bg-slate-100" />
        <Skeleton className="h-4 w-12 bg-slate-100 rounded-full" />
      </div>
    </Card>
  )

  // 2. هيكل قائمة أسطر (List Item Skeleton)
  const renderList = () => (
    <div className="flex items-center justify-between p-4 bg-white border border-slate-100 rounded-xl w-full animate-pulse">
      <div className="flex items-center gap-3 w-2/3">
        <Skeleton className="h-10 w-10 rounded-full bg-slate-100 shrink-0" />
        <div className="space-y-2 w-full">
          <Skeleton className="h-4 w-1/3 bg-slate-100" />
          <Skeleton className="h-3 w-1/2 bg-slate-100" />
        </div>
      </div>
      <Skeleton className="h-4 w-12 bg-slate-100 rounded-md" />
    </div>
  )

  // 3. هيكل تفاصيل صفحة كاملة (Full Page Content Skeleton)
  const renderPage = () => (
    <div className="bg-white rounded-3xl border border-slate-200/60 p-6 md:p-8 space-y-6 w-full max-w-3xl mx-auto animate-pulse">
      <div className="flex flex-col items-center space-y-3 border-b border-slate-100 pb-6">
        <Skeleton className="h-8 w-1/3 bg-slate-100 rounded-lg" />
        <Skeleton className="h-4 w-1/4 bg-slate-50 rounded-md" />
      </div>
      <div className="space-y-4 py-4">
        <Skeleton className="h-4 w-full bg-slate-50 rounded-md" />
        <Skeleton className="h-4 w-11/12 bg-slate-50 rounded-md" />
        <Skeleton className="h-4 w-4/5 bg-slate-50 rounded-md" />
      </div>
      <div className="flex justify-between items-center pt-4 border-t border-slate-100">
        <Skeleton className="h-4 w-20 bg-slate-100" />
        <Skeleton className="h-4 w-24 bg-slate-100" />
      </div>
    </div>
  )

  // 4. هيكل كروت إحصائيات (Stats Dashboard Skeleton)
  const renderStats = () => (
    <Card className="bg-white border-slate-200/80 p-4 flex items-center justify-between h-21 w-full animate-pulse">
      <div className="space-y-2 w-1/2">
        <Skeleton className="h-3 w-16 bg-slate-100" />
        <Skeleton className="h-6 w-12 bg-slate-100" />
      </div>
      <Skeleton className="h-11 w-11 rounded-xl bg-slate-100" />
    </Card>
  )

  // رندرة المكونات بناءً على الـ variant المختار وتكراره حسب الـ count
  return (
    <>
      {variant === "card" && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full">
          {Array(count).fill(0).map((_, i) => <div key={i}>{renderCard()}</div>)}
        </div>
      )}

      {variant === "list" && (
        <div className="space-y-3 w-full">
          {Array(count).fill(0).map((_, i) => <div key={i}>{renderList()}</div>)}
        </div>
      )}

      {variant === "stats" && (
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full max-w-4xl mx-auto">
          {Array(count).fill(0).map((_, i) => <div key={i}>{renderStats()}</div>)}
        </div>
      )}

      {variant === "page" && renderPage()}
    </>
  )
}