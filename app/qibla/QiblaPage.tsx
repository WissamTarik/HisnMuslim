"use client"

import { useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { useGetGeoLocation } from "@/hooks"
import { QiblaCompass } from "../_Components"
import QiblaHeader from "./QiblaHeader"

export default function QiblaPage() {
  const { getUserLocation, locationType, latitude, longitude } = useGetGeoLocation()

  useEffect(() => {
    getUserLocation()
  }, [])

  return (
    <main className="min-h-screen bg-slate-50 dark:bg-slate-900 flex items-center justify-center p-4 sm:p-8" dir="rtl">
      <Card className="w-full max-w-md border-slate-200 dark:border-slate-800 shadow-md bg-white dark:bg-slate-950">
        <QiblaHeader latitude={latitude} locationType={locationType} longitude={longitude}/>
        <CardContent className="p-6">
          <QiblaCompass latitude={latitude} longitude={longitude} />
        </CardContent>
      </Card>
    </main>
  )
}