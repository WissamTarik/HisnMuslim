import { getHadithsActions } from "@/actions/hadith.actions"
import ArabicHadithCard from "../_Components/Hadith/ArabicHadithCard/ArabicHadithCard"
import { Empty, HadithForm } from "../_Components"
import HadithPagination from "../_Components/Hadith/HadithPagination"
import RandomHadithButton from "../_Components/Hadith/RandomHadithButton"
import { BarChart3, BookOpen, HelpCircle } from "lucide-react"
import Link from "next/link"
import { Suspense } from "react" 
import ShadcnSkeleton from "@/skeletons/ShadcnSkeleton/ShadcnSkeleton"

type THadithPageProps = {
    searchParams: Promise<{ q?: string, book?: string, status?: string, page?: string }>
}

export default async function HadithPage({ searchParams }: THadithPageProps) {
    const { q, book, status, page } = await searchParams
    const currentBook = book || "sahih-bukhari"
    const currentQuery = q || ""
    const currentStatus = status || "all" 
    const currentPage = parseInt(page || "1", 10)

    const result = await getHadithsActions(currentBook, currentStatus, currentQuery, currentPage.toString())
    const data = result ? result.hadiths.data : []
    const totalResults =  data.length

    return (
        <>
            <main className="min-h-screen bg-slate-50 py-10 px-4 max-w-3xl mx-auto space-y-6" dir="rtl">
                <header className="text-right border-b pb-4 border-slate-200 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <div>
                        <h1 className="text-3xl font-bold text-slate-900 font-serif">الباحث في الحديث النبوي</h1>
                        <p className="text-sm text-slate-500 mt-1">عرض النصوص والمصنفات باللغة العربية حصراً</p>
                    </div>
                    
                    {data.length > 0 && (
                        <RandomHadithButton hadiths={data} />
                    )}
                </header>
                
                <Suspense fallback={<ShadcnSkeleton variant="stats" count={3} />}>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 bg-white p-4 rounded-xl border border-slate-200 shadow-xs font-serif">
                        <div className="flex items-center gap-3 bg-slate-50/60 p-3 rounded-lg border border-slate-100">
                            <BarChart3 className="h-5 w-5 text-emerald-600 shrink-0" />
                            <div>
                                <span className="text-xs text-slate-400 block font-sans">عدد نتائج الصفحة:</span>
                                <span className="font-bold text-slate-800 text-sm">{totalResults} حديث</span>
                            </div>
                        </div>
                        <div className="flex items-center gap-3 bg-slate-50/60 p-3 rounded-lg border border-slate-100">
                            <BookOpen className="h-5 w-5 text-emerald-600 shrink-0" />
                            <div>
                                <span className="text-xs text-slate-400 block font-sans">الكتاب الحالي:</span>
                                <span className="font-bold text-slate-800 text-sm truncate max-w-37.5 block">
                                    {data[0]?.book?.bookName || currentBook.replace("-", " ")}
                                </span>
                            </div>
                        </div>
                        <div className="flex items-center gap-3 bg-slate-50/60 p-3 rounded-lg border border-slate-100">
                            <HelpCircle className="h-5 w-5 text-emerald-600 shrink-0" />
                            <div>
                                <span className="text-xs text-slate-400 block font-sans">حالة الفلترة والتصنيف:</span>
                                <span className="font-bold text-slate-800 text-sm">
                                    {currentStatus === "all" ? "كل الأحاديث" : currentStatus}
                                </span>
                            </div>
                        </div>
                    </div>
                </Suspense>
                
                <HadithForm currentBook={currentBook} currentStatus={currentStatus}/>

                <Suspense fallback={<ShadcnSkeleton variant="list" count={5} />}>
                    <section className="space-y-6">
                        { data?.length === 0 ? (
                            <Empty description="لم يتم العثور على أي نتائج تطابق خيارات الفلترة الحالية." title="لا توجد نتائج"/>
                        ) : (
                            <>
                                {data.map((hadith) => (
                                    <Link 
                                        key={hadith.id} 
                                        href={`/hadith/${hadith.hadithNumber}?book=${currentBook}`} 
                                        scroll={false}
                                        className="block"
                                    >
                                        <ArabicHadithCard  h={hadith} highlightTerm={currentQuery} />
                                    </Link>
                                ))}

                                <HadithPagination 
                                    length={data.length} 
                                    currentBook={currentBook}
                                    currentPage={currentPage}
                                    currentQuery={currentQuery}
                                    currentStatus={currentStatus}
                                />
                            </>
                        )}
                    </section>
                </Suspense>
            </main>
        </>
    )
}