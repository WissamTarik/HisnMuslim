import { Clock } from "lucide-react";

export default function RemainingTime({remainingTime}:{remainingTime:string}) {
  return (
    <>
            <div className="flex flex-col items-center justify-center">
            <span className="text-xs text-emerald-100 flex items-center gap-1 mb-2">
              <Clock className="h-3.5 w-3.5" /> المتبقي للأذان
            </span>
            <div className="px-6 py-3 rounded-2xl bg-white/10 backdrop-blur-md border border-white/10 text-center min-w-36">
              <span className="text-2xl font-mono font-bold tracking-widest">{remainingTime || "00:00:00"}</span>
            </div>
          </div>
    </>
  )
}
