import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import Link from 'next/link'

export default function PrayerCardCTA() {
  return (
    <>
      <Card className="border-dashed border-emerald-200 bg-emerald-50/30">
        <CardContent className="p-4 flex items-center justify-between">
          <div>
            <h3 className="font-semibold">عرض مواقيت الأيام القادمة</h3>
            <p className="text-sm text-muted-foreground">استعرض مواقيت الصلاة لأسبوع أو شهر كامل</p>
          </div>
       <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
      {/* زر المحول الجديد */}
      <Button variant="outline" className="border-emerald-600 text-emerald-700 hover:bg-emerald-50" >
        <Link href="/date-converter">محول التاريخ</Link>
      </Button>
      
      {/* زر التقويم القديم */}
      <Button >
        <Link href="/PrayerCalendarCard">التقويم الكامل</Link>
      </Button>
    </div>
        </CardContent>
      </Card>
    </>
  )
}
