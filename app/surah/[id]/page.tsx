import { getSurahByNumberAction } from "@/actions/quran.actions"
import { Empty, QuranBackBtn, SurahFooter, SurahHeader, SurahReader } from "@/app/_Components"
import { Metadata } from "next"
import SurahSettings from "./SurahSettings"
import { QURAN_THEME } from "@/constants/quran"
import { Suspense } from "react"
import ShadcnSkeleton from "@/skeletons/ShadcnSkeleton/ShadcnSkeleton"

type TSurahPageProps = {
    params: Promise<{ id: string }>
    searchParams: Promise<{ size?: string; theme?: string }>
}

export async function generateMetadata({ params }: TSurahPageProps): Promise<Metadata> {
    const { id } = await params
    const surah = await getSurahByNumberAction(parseInt(id))
    return {
        title: surah ? `سورة ${surah.name} كاملة مكتوبة | المصحف الإلكتروني` : "سورة قرآنية شريفة",
        description: surah ? `تصفح وقراءة سورة ${surah.name} بالرسم العثماني كاملاً، سورة ${surah.revelationType === "Meccan" ? "مكية" : "مدنية"} عدد آياتها ${surah.ayahs.length}.` : ""
    }
}

export default async function SurahPage({ params, searchParams }: TSurahPageProps) {
    const { id } = await params
    const { size, theme } = await searchParams 

    const surah = await getSurahByNumberAction(parseInt(id))

    if (!surah)
        return <Empty description="لم نتمكن من العثور على السورة المطلوبة" />

    const fontSize = size ? `${parseInt(size)}px` : "24px"

    const currentStyle =    QURAN_THEME [theme || "cream"]

    return (
        <main className="min-h-screen bg-slate-50 py-10 px-4 max-w-3xl mx-auto space-y-6" dir="rtl">
            
         <QuranBackBtn/>
            <SurahSettings />

            <article className="bg-[#fcfbf7] rounded-3xl border-4 border-[#c5a880] shadow-2xl overflow-hidden relative p-4 md:p-8">
                <div className="border border-[#e9dfcc] p-2 md:p-4 rounded-2xl relative before:content-[''] before:absolute before:inset-1 before:border-2 before:border-[#c5a880]/30 before:rounded-xl before:pointer-events-none">
                    
                  <SurahHeader {...surah}/>

                    {/* البسملة الشريفة برسم أنيق منفصل عدا التوبة */}
                    {surah.number !== 9 && (
                        <p className="text-center text-3xl text-slate-800 font-bold tracking-wide my-8 font-serif">
                            بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
                        </p>
                    )}
                  <Suspense fallback={<ShadcnSkeleton variant="page" />}>
                           <SurahReader surah={surah} 
                            fontSize={fontSize}
                            backgroundColor={currentStyle.backgroundColor}
                            borderColor={currentStyle.borderColor}
                            />
                            </Suspense>
                </div>
     <SurahFooter englishName={surah.englishName} englishNameTranslation={surah.englishNameTranslation}/>
            </article>
        </main>
    )
}