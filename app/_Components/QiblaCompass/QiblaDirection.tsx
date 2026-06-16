import { TQiblaCompassProps } from './QiblaCompass'
import useQiblaCompass from './useQiblaCompass'

export default function QiblaDirection({latitude,longitude}:TQiblaCompassProps) {
    const {formattedDirection,directionLabel}=useQiblaCompass(latitude,longitude)
  return (
    <>
        <div className="mt-6 text-center space-y-2">
                    <span className="text-3xl font-black text-emerald-600 dark:text-emerald-400 block tracking-tight">
                        {formattedDirection}°
                    </span>
                    <div className="text-sm font-bold text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-slate-900/60 px-4 py-1.5 rounded-full inline-block">
                        القبلة تقع {directionLabel}
                    </div>
                    <p className="text-[11px] font-medium text-slate-400 dark:text-slate-500 max-w-65 mx-auto leading-relaxed">
                        قم بتدوير جهازك حتى ينطبق حرف <span className="text-rose-500 font-bold">N</span> مع اتجاه رأس السهم الأخضر لتحديد الكعبة المشرفة بدقة.
                    </p>
                </div>
    </>
  )
}
