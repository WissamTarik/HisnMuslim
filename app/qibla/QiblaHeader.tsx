import { CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
type TQiblaHeaderProps={
    longitude:number,
    latitude:number,
    locationType:"default"|"user",
}
export default function QiblaHeader({latitude,longitude,locationType}:TQiblaHeaderProps) {
  return (
    <>
      <CardHeader className="text-center pb-2">
          <CardTitle className="text-2xl font-black text-slate-800 dark:text-slate-100">
            تحديد إتجاه القبلة
          </CardTitle>
          <CardDescription className="text-xs text-slate-500 dark:text-slate-400 mt-1">
            {locationType === "user" 
              ? `تم تحديد موقعك بدقة (خط عرض: ${latitude.toFixed(4)} | خط طول: ${longitude.toFixed(4)})` 
              : "جاري استخدام الموقع الافتراضي، يرجى السماح بصلاحية الموقع للحصول على دقة أعلى."}
          </CardDescription>
        </CardHeader>
    </>
  )
}
