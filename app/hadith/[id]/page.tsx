import { Metadata } from "next"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { getHadithByNumber } from "@/actions/hadith.actions"
import { Empty, OneHadithHeader ,OneHadithContent} from "@/app/_Components"
import { Suspense } from "react" 
import ShadcnSkeleton from "@/skeletons/ShadcnSkeleton/ShadcnSkeleton"

type TProps = {
    params: Promise<{ id: string }>,
    searchParams: Promise<{ book?: string }>
}

export async function generateMetadata({ params, searchParams }: TProps): Promise<Metadata> {
    const { book } = await searchParams
    const { id } = await params
    return {
        title: `الحديث الشريف رقم ${id} | الباحث في الحديث النبوي`,
        description: `عرض وتخريج الحديث النبوي رقم ${id} ومعرفة درجته وتبويبه الفقهي حسب كتاب ${book} .`
    }
}

export default async function HadithDetailPage({ params, searchParams }: TProps) {
    const { id } = await params
    const { book } = await searchParams
       
    if (!book) return <div className="p-6 text-center font-sans text-red-500">اسم الكتاب مطلوب لعرض الحديث.</div>

    let hadith = await getHadithByNumber(id, book);

    if (!hadith) {
        return (
            <Empty description=" لم نتمكن من العثور على الحديث المطلوب"  title="يمكنك العودة لمحرك البحث"/>
        )
    }

    return (
        <main className="min-h-screen bg-slate-50 py-12 px-4 max-w-2xl mx-auto space-y-6" dir="rtl">
            <Link href="/hadith" className="inline-flex items-center gap-2 text-sm text-emerald-700 hover:text-emerald-800 font-sans transition-colors group">
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                العودة لمحرك البحث الأكاديمي
            </Link>

            <Suspense fallback={<ShadcnSkeleton variant="page"  count={1}/>}>
                <article className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-xl space-y-6 font-serif text-right">
                    <OneHadithHeader status={hadith.status}/>
                    <OneHadithContent {...hadith}/>
                </article>
            </Suspense>
        </main>
    )
}