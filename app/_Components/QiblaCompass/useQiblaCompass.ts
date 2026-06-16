import { getQiblaAction } from "@/actions/qibla.actions";
import { useEffect, useMemo, useState } from "react";


function getDirectionLabel(angle: number): string {
    const normalizedAngle = ((angle % 360) + 360) % 360;

    if (normalizedAngle >= 337.5 || normalizedAngle < 22.5)   return "جهة الشمال";
    if (normalizedAngle >= 22.5   && normalizedAngle < 67.5)  return "جهة الشمال الشرقي";
    if (normalizedAngle >= 67.5   && normalizedAngle < 112.5) return "جهة الشرق";
    if (normalizedAngle >= 112.5  && normalizedAngle < 157.5) return "جهة الجنوب الشرقي";
    if (normalizedAngle >= 157.5  && normalizedAngle < 202.5) return "جهة الجنوب";
    if (normalizedAngle >= 202.5  && normalizedAngle < 247.5) return "جهة الجنوب الغربي";
    if (normalizedAngle >= 247.5  && normalizedAngle < 292.5) return "جهة الغرب";
    if (normalizedAngle >= 292.5  && normalizedAngle < 337.5) return "جهة الشمال الغربي";

    return "جهة القبلة";
}

export default function useQiblaCompass(latitude:number,longitude:number) {
       const [direction, setDirection] = useState<number | null>(null);
        const [isLoading, setIsLoading] = useState(false);
    
        const formattedDirection = useMemo(() => direction?.toFixed(0) ?? "0", [direction]);
        const directionLabel = useMemo(() => direction !== null ? getDirectionLabel(direction) : "", [direction]);
    
        useEffect(() => {
            let mounted = true
            async function fetchQibla() {
                setIsLoading(true)
                try {
                    const response = await getQiblaAction(latitude as number, longitude as number)
                    if (mounted) setDirection(response)
                } catch (error) {
                    console.error("فشل في استرجاع البيانات", error)
                } finally {
                    setIsLoading(false)
                }
            }
            if (latitude && longitude) {
                fetchQibla()
            }
            return () => {
                mounted = false
            }
        }, [latitude, longitude]);
  return {direction,isLoading,formattedDirection,directionLabel}
}
