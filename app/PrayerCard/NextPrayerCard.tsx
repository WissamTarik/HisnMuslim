
import { Card, CardContent } from "@/components/ui/card";
import useNextPrayer from "./useNextPrayer";
import LocationInfo from "./LocationInfo";
import ProgressBar from "./ProgressBar";
import RemainingTime from "./RemainingTime";

type TNextPrayerCardProps= {
  nextPrayer: {
    name: string;
    time: string; 
  };
  remainingTime: string; 
  geoLocType?: string;
}

export default function NextPrayerCard({ nextPrayer, remainingTime }: TNextPrayerCardProps) {
 
const { currentNextPrayerConfig }=useNextPrayer(remainingTime,nextPrayer.name)
  return (
    <Card className="relative overflow-hidden border-none shadow-lg rounded-2xl bg-linear-to-br from-emerald-600 via-teal-600 to-emerald-700 text-white">
      <CardContent className="relative p-6 space-y-6">
        
         <LocationInfo prayerName={nextPrayer.name}/>

        <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
          <div className="space-y-1 text-center sm:text-right">
            <p className="text-emerald-100/80 text-xs">الصلاة القادمة</p>
            <h2 className="text-4xl font-black tracking-tight">
              {currentNextPrayerConfig ? currentNextPrayerConfig.label : nextPrayer.name}
            </h2>
            <p className="text-emerald-50/70 text-sm font-mono">الأذان: {nextPrayer.time}</p>
          </div>

     <RemainingTime remainingTime={remainingTime}/>
        </div>

      <ProgressBar nextPrayerName={nextPrayer.name} remainingTime={remainingTime}/>

      </CardContent>
    </Card>
  );
}