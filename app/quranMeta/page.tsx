import { getQuranSurahsList } from "@/actions/quran.actions"
import ContinueReading from "./ContinueReading"
import { PopularSurahs, QuranHero, QuranStatistics, SurahCard } from "../_Components"
import { Suspense } from "react"
import ShadcnSkeleton from "@/skeletons/ShadcnSkeleton/ShadcnSkeleton"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "القرآن الكريم كاملاً | المصحف الإلكتروني",
  description:
    "اقرأ القرآن الكريم كاملاً بالرسم العثماني، تصفح السور والآيات مع متابعة آخر موضع قراءة.",

};

export default async function QuranMeta() {
  const surahs = await getQuranSurahsList()
  return (
    <>
      <main className="min-h-screen bg-slate-50/50 py-10 px-4 max-w-7xl mx-auto space-y-10" dir="rtl">
        
       <QuranHero/>
        {surahs && <ContinueReading allSurahs={surahs} />}

       <PopularSurahs/>
         <Suspense fallback={<ShadcnSkeleton variant="stats" count={3} />}>
         <QuranStatistics surahs={surahs}/>
        </Suspense>

         <Suspense fallback={<ShadcnSkeleton variant="card" count={8} />}>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {surahs?.map((surah) => (
          <SurahCard {...surah} key={surah.number}/ >
          ))}
        </div>
        </Suspense>
      </main>
    </>
  )
}