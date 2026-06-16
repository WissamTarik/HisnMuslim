import { getCurrentIslamicMonth, getSpecialDays } from "@/actions/specialDays.actions"
import { TSpecialDay } from "@/types/specialDays.types"
import SpecialMonthCard from "../_Components/SpecialMonthCard/SpecialMonthCard";
import NoSpecialDays from "./NoSpecialDays";
import SpecialDaysHeader from "./SpecialDaysHeader";
import { Suspense } from "react";
import ShadcnSkeleton from "@/skeletons/ShadcnSkeleton/ShadcnSkeleton";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "المناسبات والأيام الإسلامية",
  description:
    "استعرض المناسبات الإسلامية والأيام المباركة خلال العام الهجري مع تفاصيل كل مناسبة.",
};
export default async function SpecialDays() {
   const [days,currentHijriMonth]=await Promise.all([
      getSpecialDays(),
      getCurrentIslamicMonth()
    ])
    const groupedByMonth=days.reduce<Record<number,TSpecialDay[]>>((acc,day)=>{
      if(!acc[day.month]) acc[day.month]=[];
      acc[day.month].push(day)
      return acc
    },{})
    const sortedMonths=Object.keys(groupedByMonth).map((monthNumString)=>{
      const monthNum=parseInt(monthNumString)
      return{
        monthNum,
        events:[...groupedByMonth[monthNum]].sort((a,b)=>a.day-b.day)
      }
    }).sort((a,b)=>a.monthNum-b.monthNum)
    if (!days || days.length === 0) {
    return (
      <NoSpecialDays/>
    )
  }
  return (
    <>
    <div className="container mx-auto p-4 md:p-8 space-y-8" dir="rtl">
   <SpecialDaysHeader/>

     <Suspense fallback={<ShadcnSkeleton variant="card" count={3} />}>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-start">
        {sortedMonths.map(({ monthNum, events }) => (
            <SpecialMonthCard monthNum={monthNum} events={events}
            
            currentHijriMonth={currentHijriMonth} 
            key={monthNum}/>
        ))}
      </div>
      </Suspense>
    </div>
    </>
  )
}
