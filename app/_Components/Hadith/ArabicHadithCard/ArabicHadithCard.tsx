"use client"

import { THadithItem } from "@/types/hadith.types"
import ArabicHadithCardContent from "./ArabicHadithCardContent"
import ArabicHadithCardHeader from "./ArabicHadithCardHeader"

export type TArabicHadithCard = {
    h: THadithItem,
    highlightTerm?: string
}

export default function ArabicHadithCard({ h, highlightTerm = "" }: TArabicHadithCard) {
    
    return (
        <article 
            dir="rtl" 
            className="bg-white rounded-xl border border-slate-200 shadow-xs overflow-hidden font-serif text-right flex flex-col hover:border-emerald-300 hover:shadow-md transition-all duration-200"
        >
           <ArabicHadithCardHeader bookName={h.book.bookName} status={h.status} hadithNumber={h.hadithNumber}/>
       <ArabicHadithCardContent chapterArabic={h.chapter.chapterArabic} 
                                hadithArabic={h.hadithArabic}
                                highlightTerm={highlightTerm}
                                headingArabic={h.headingArabic}
                                />

            <div className="bg-slate-50/50 mt-auto border-t border-slate-100 px-5 py-2.5 text-xs text-slate-400 flex justify-between items-center">
                <span>المجلد: {h.volume} / الباب: {h.chapterId}</span>
                <span>المؤلف: {h.book.writerName} ({h.book.writerDeath}هـ)</span>
            </div>
        </article>
    )
}