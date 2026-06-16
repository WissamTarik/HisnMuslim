import { Loader2 } from "lucide-react"
import { Skeleton } from "@/components/ui/skeleton" 

type TLoadingProps = {
  message?: string
  className?: string
  variant?: "default" | "text" | "card" | "list" | "circle" 
  count?: number 
}

export default function Loading({ 
  message, 
  className = "py-8", 
  variant = "default", 
  count = 1 
}: TLoadingProps) {

  const renderDefault = () => (
    <div className="flex flex-col items-center justify-center gap-3 w-full">
      <Loader2 className="h-8 w-8 animate-spin text-emerald-600" />
      {message && <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">{message}</p>}
    </div>
  )

  const renderText = () => (
    <div className="space-y-2.5 w-full">
      <Skeleton className="h-4 w-1/3 bg-slate-100 dark:bg-slate-800" />
      <Skeleton className="h-3 w-full bg-slate-50 dark:bg-slate-900" />
      <Skeleton className="h-3 w-5/6 bg-slate-50 dark:bg-slate-900" />
    </div>
  )

  const renderCard = () => (
    <div className="rounded-2xl border border-slate-200 dark:border-slate-800 p-5 flex flex-col gap-4 w-full bg-white dark:bg-slate-950">
      <div className="flex items-center justify-between w-full">
        <Skeleton className="h-5 w-24 bg-slate-100 dark:bg-slate-800" />
        <Skeleton className="h-5 w-10 bg-slate-100 dark:bg-slate-800 rounded-lg" />
      </div>
      <Skeleton className="h-3 w-32 bg-slate-50 dark:bg-slate-900" />
      <div className="flex items-center gap-2 pt-2 border-t border-slate-100 dark:border-slate-900 w-full">
        <Skeleton className="h-3 w-16 bg-slate-50 dark:bg-slate-900" />
      </div>
    </div>
  )

  const renderList = () => (
    <div className="flex items-center justify-between p-4 bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl w-full">
      <div className="flex items-center gap-3 w-2/3">
        <Skeleton className="h-10 w-10 rounded-full bg-slate-100 dark:bg-slate-800 shrink-0" />
        <div className="space-y-2 w-full">
          <Skeleton className="h-4 w-1/3 bg-slate-100 dark:bg-slate-800" />
          <Skeleton className="h-3 w-1/2 bg-slate-50 dark:bg-slate-900" />
        </div>
      </div>
      <Skeleton className="h-4 w-12 bg-slate-100 dark:bg-slate-800 rounded-md" />
    </div>
  )

  const renderCircle = () => (
    <div className="flex flex-col items-center justify-center p-4 w-full gap-4">
      <Skeleton className="w-48 h-48 sm:w-56 sm:h-56 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center">
        <Skeleton className="w-40 h-40 rounded-full bg-white dark:bg-slate-950 border border-dashed border-slate-200/60 dark:border-slate-800" />
      </Skeleton>
    </div>
  )

  const items = Array(count).fill(0);

  return (
    <div 
      className={`w-full max-w-3xl mx-auto px-4 flex flex-col items-center justify-center gap-4 animate-pulse ${className}`}
    >
      {variant === "default" && renderDefault()}

      {variant === "text" && items.map((_, i) => <div key={i} className="w-full">{renderText()}</div>)}

      {variant === "card" && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full">
          {items.map((_, i) => <div key={i} className="w-full">{renderCard()}</div>)}
        </div>
      )}

      {variant === "list" && items.map((_, i) => <div key={i} className="w-full">{renderList()}</div>)}

      {variant === "circle" && renderCircle()}

      {variant !== "default" && message && (
        <p className="text-xs text-slate-400 dark:text-slate-500 font-medium text-center mt-2 flex items-center gap-1.5">
          <Loader2 className="h-3 w-3 animate-spin text-emerald-600" />
          {message}
        </p>
      )}
    </div>
  )
}