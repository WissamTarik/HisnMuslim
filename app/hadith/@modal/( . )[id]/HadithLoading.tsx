import { Skeleton } from '@/components/ui/skeleton'

export default function HadithLoading() {
  return (
    <>
         <div className="p-6 space-y-5 animate-pulse w-full">
                        <div className="flex items-center gap-3 border-b pb-4 border-slate-100">
                            <Skeleton className="h-5 w-24 bg-slate-100" />
                            <Skeleton className="h-5 w-16 bg-slate-100 rounded-full" />
                        </div>
                        <div className="space-y-3 py-2">
                            <Skeleton className="h-4 w-full bg-slate-50" />
                            <Skeleton className="h-4 w-11/12 bg-slate-50" />
                            <Skeleton className="h-4 w-4/5 bg-slate-50" />
                        </div>
                        <div className="flex justify-between items-center pt-2 text-xs">
                            <Skeleton className="h-3 w-28 bg-slate-100" />
                            <Skeleton className="h-3 w-32 bg-slate-100" />
                        </div>
                    </div>
    </>
  )
}
