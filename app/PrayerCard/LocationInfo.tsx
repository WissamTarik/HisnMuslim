import { MapPin } from "lucide-react"
import usePrayerCard from "./usePrayerCard"
import useNextPrayer from "./useNextPrayer"

export default function LocationInfo({prayerName}:{prayerName:string}) {
     const {geoLocType,remainingTime}=usePrayerCard()
     const {currentTime}=useNextPrayer(remainingTime,prayerName)
  return (
    <>
         <div className="flex flex-col sm:flex-row justify-between items-center gap-4 border-b border-white/10 pb-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-[11px] text-emerald-50 backdrop-blur-md">
            <MapPin className="h-3.5 w-3.5" />
            {geoLocType === "user" ? "حسب موقعك الحالي" : "توقيت القاهرة (الافتراضي)"}
          </div>
          
          <div className="flex items-center gap-2 text-emerald-50 bg-black/10 px-3 py-1 rounded-lg border border-white/5 font-mono text-xs">
            <span className="text-[11px] opacity-80">الوقت الحالي:</span>
            <span className="font-bold tracking-wider">{currentTime || "--:--:--"}</span>
          </div>
        </div>
    </>
  )
}
