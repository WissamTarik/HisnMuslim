"use client"


import Loading from "../Loading/Loading";
import Empty from "../Empty/Empty";
import useQiblaCompass from "./useQiblaCompass";
import QiblaRose from "./QiblaRose";
import QiblaDirection from "./QiblaDirection";

export type TQiblaCompassProps = {
    latitude: number,
    longitude: number
}
export default function QiblaCompass({ latitude, longitude }: TQiblaCompassProps) {
    const { direction, isLoading } = useQiblaCompass(latitude, longitude)

    if (isLoading) {
        return <Loading variant="circle" 
                message="جاري الاتصال بمستشعرات الاتجاه وتحديد القبلة..." 
                className="py-4" />
    }

    if (direction === null) return <Empty
        title="تعذر تحديد الموقع"
        description="يرجى السماح بصلاحية الموقع لمعرفة اتجاه القبلة" />

    return (
        <>
            <div className="flex flex-col items-center justify-center w-full">
                {/* Compass Circular Box */}
                <QiblaRose latitude={latitude} longitude={longitude} />

                <QiblaDirection latitude={latitude} longitude={longitude} />
            </div>
        </>
    )
}