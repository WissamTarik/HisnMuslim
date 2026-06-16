import { TQiblaCompassProps } from "./QiblaCompass"
import useQiblaCompass from "./useQiblaCompass"
import { Navigation } from "lucide-react"

export default function QiblaRose({latitude,longitude}:TQiblaCompassProps) {
    const {direction}=useQiblaCompass(latitude,longitude)
    const dir=direction as number
  return (
    <>
         <div className="relative w-56 h-56 sm:w-64 sm:h-64 flex items-center justify-center rounded-full border-4 border-slate-100 dark:border-slate-900 bg-slate-50 dark:bg-slate-900/40 shadow-inner overflow-hidden">

                    <div
                        className="absolute inset-0 flex items-center justify-center transition-transform duration-1000 ease-out will-change-transform"
                        style={{ transform: `rotate(${-dir}deg)` }}
                    >
                        <span className="absolute top-2.5 font-black text-sm text-rose-500">N</span>
                        <span className="absolute right-4 font-bold text-sm text-slate-400">E</span>
                        <span className="absolute bottom-2.5 font-bold text-sm text-slate-400">S</span>
                        <span className="absolute left-4 font-bold text-sm text-slate-400">W</span>

                        <div className="absolute inset-4 rounded-full border border-dashed border-slate-200 dark:border-slate-800/80 pointer-events-none" />
                    </div>

                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
                        <div className="relative h-full w-full flex items-center justify-center">
                            <Navigation className="h-9 w-9 fill-emerald-500 text-emerald-500 -translate-y-18 drop-shadow-[0_4px_6px_rgba(16,185,129,0.4)]" />
                        </div>
                    </div>

                    <div className="absolute h-4 w-4 rounded-full bg-slate-900 dark:bg-slate-100 border-2 border-white dark:border-slate-950 shadow z-20" />
                </div>
    </>
  )
}

