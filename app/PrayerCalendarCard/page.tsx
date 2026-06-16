import { Metadata } from 'next';
import PrayerCalendarCard from './PrayerCalendarCard'
export const metadata:Metadata = {
  title: "تقويم مواقيت الصلاة",
  description:
    "استعرض مواقيت الصلاة لأيام متعددة مع إمكانية اختيار نطاق زمني وعرض الجدول الكامل.",
};
export default function PrayerCalendarCardPage() {
  return (
    <>
      <PrayerCalendarCard/>
    </>
  )
}
