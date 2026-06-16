import { AzkarCard, Loading } from "@/app/_Components"
import { Button } from "@/components/ui/button"
import azkarData from "@data/azkar.json"
import { ChevronRight } from "lucide-react"
import { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Suspense } from "react"

type TAzkarDisplayProps = {
  params: Promise<{ category: string }>
}

const validCategories = Object.keys(azkarData)
export async function generateMetadata({params}:TAzkarDisplayProps):Promise<Metadata> {
   const {category}=await params
   const titles:Record<string,string>={
    sabach: "أذكار الصباح",
    masaa: "أذكار المساء",
    postPrayer: "أذكار بعد الصلاة",
   }
   const title=titles[category]|| "الأذكار";

  return {
    title: `${title} | منصة الأذكار الإسلامية`,
    description: `اقرأ ${title} كاملة باللغة العربية مع تصميم مريح وسهل الاستخدام.`,
  };
  
}
export default async function azkarDisplay({ params }: TAzkarDisplayProps) {
  const { category } = await params
  
  if (!validCategories.includes(category))
    notFound()

  const currentAzkar = azkarData[category as keyof typeof azkarData]

  const pageMeta: Record<string, { title: string, headerBg: string }> = {
    sabach: { title: "أذكار الصباح", headerBg: "bg-amber-500 text-white" },
    masaa: { title: "أذكار المساء", headerBg: "bg-indigo-600 text-white" },
    postPrayer: { title: "أذكار بعد الصلاة", headerBg: "bg-emerald-600 text-white" }
  }
  
  const meta = pageMeta[category] || { title: "الأذكار", headerBg: "bg-slate-700 text-white" }

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 pb-12" dir="rtl">
      {/* الهيدر العلوي الثابت */}
      <div className={`w-full py-6 px-4 shadow-sm mb-8 ${meta.headerBg}`}>
        <div className="max-w-3xl mx-auto flex items-center justify-between">
          <Link href="/azkar">
            <Button variant="ghost" className="text-white cursor-pointer hover:bg-white/10">
              <ChevronRight className="h-5 w-5 ml-1" />
              الفئات
            </Button>
          </Link>
          <h1 className="text-xl font-bold md:text-2xl">{meta.title}</h1>
          <div className="w-10"></div> 
        </div>
      </div>  

      {/* ⭐ قائمة الأذكار مغلفة بـ Suspense ومزودة بمكون الـ Loading الخاص بكِ */}
      <div className="max-w-3xl mx-auto px-4">
        <Suspense 
          fallback={
            <Loading 
              variant="list" 
              count={4} 
              message="جاري تحضير الأذكار والتحصينات اليومية..." 
              className="py-6"
            />
          }
        >
          <div className="space-y-4">
            {currentAzkar.map((zekr) => (
              <AzkarCard {...zekr} key={zekr.id} />
            ))}
          </div>
        </Suspense>
      </div>
    </div>
  )
}