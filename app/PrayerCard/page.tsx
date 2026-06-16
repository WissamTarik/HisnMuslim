import { Metadata } from 'next';
import PrayerCard from './PrayerCard'
export const metadata:Metadata = {
  title: "مواقيت الصلاة اليوم",
  description:
    "تعرف على مواقيت الصلاة اليوم حسب موقعك الجغرافي مع العد التنازلي للصلاة القادمة والتاريخ الهجري.",
};
export default function PrayerCardPage() {
  return (
    <>
      <PrayerCard/>
    </>
  )
}
