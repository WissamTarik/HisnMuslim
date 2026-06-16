import useNextPrayer from './useNextPrayer'
import { Progress } from '@/components/ui/progress'
type TProgressBarProps={remainingTime:string,nextPrayerName:string}
export default function ProgressBar({remainingTime,nextPrayerName}:TProgressBarProps) {
    const { currentNextPrayerConfig, progressValue }=useNextPrayer(remainingTime,nextPrayerName)
    
  return (
    <>
        <div className="space-y-1.5 pt-2">
          <div className="flex justify-between text-[11px] text-emerald-100/70 font-mono">
            <span>الصلاة السابقة</span>
            <span>{progressValue}%</span>
            <span>{currentNextPrayerConfig ? currentNextPrayerConfig.label : nextPrayerName}</span>
          </div>
          <Progress value={progressValue} className="h-2 bg-white/10 text-emerald-400" />
        </div>
    </>
  )
}
