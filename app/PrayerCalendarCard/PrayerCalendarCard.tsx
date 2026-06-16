"use client"

import CalendarRangePicker from "./CalendarRangePicker";
import CalendarTable from "./CalendarTable";
import CalendarDayCard from "./CalendarDayCard";
import { Card, CardContent } from "@/components/ui/card";
import { Empty, Loading } from "../_Components";
import usePrayerCalendarCard from "./usePrayerCalendarCard";

export default function PrayerCalendarCard() {
const {
    handleDateChange,
    isLoading,
    isPopOver,
    setIsPopOver,
    calendarData,
    dateRange
  }=usePrayerCalendarCard()
  return (
    <div className="w-full max-w-4xl mx-auto p-4 space-y-6" dir="rtl">
      
      <Card className="border-slate-200 dark:border-slate-800 shadow-sm">
        <CardContent className="p-5 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="space-y-1">
            <h2 className="text-xl font-bold text-slate-800 dark:text-slate-100">عرض مواقيت الصلاة لفترة محددة</h2>
            <p className="text-xs text-slate-500 dark:text-slate-400">اختر نطاق الأيام لتحديث جدول الأوقات تلقائياً</p>
          </div>
          <CalendarRangePicker setIsPopOver={setIsPopOver}
                               isPopOver={isPopOver}
                               dateRange={dateRange}
                               handleDateChange={handleDateChange}
          />
        </CardContent>
      </Card>

      {isLoading ? (
        <Loading />
      ) : calendarData.length==0?(
       <Empty 
          title="لا توجد بيانات للفترة المحددة" 
          description="يرجى تجربة اختيار نطاق تاريخ آخر لعرض التقويم الحسابي للمواقيت." 
          className="max-w-4xl"
        />

      ):(
       <>
        <CalendarTable  data={calendarData}/>
        <CalendarDayCard  data={calendarData}/>
       </>
      )}
    </div>
  )
}