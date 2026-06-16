import { Metadata } from 'next'
import QiblaPage from './QiblaPage'
export const metadata:Metadata={
      title: "اتجاه القبلة",
  description:
    "اعرف اتجاه القبلة بدقة من موقعك الحالي باستخدام البوصلة الذكية وتحديد الموقع الجغرافي.",

}
export default function MyQiblaPage() {
  return (
    <>
      <QiblaPage/>
    </>
  )
}
