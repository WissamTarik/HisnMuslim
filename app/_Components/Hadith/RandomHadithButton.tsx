"use client"

import { useState, useEffect } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { THadithItem } from '@/types/hadith.types'
import { pickRandomHadith } from '@/utils/hadith-utils'
import { Shuffle } from 'lucide-react'

type TRandomHadithButtonProps = {
    hadiths: THadithItem[]
}

export default function RandomHadithButton({ hadiths }: TRandomHadithButtonProps) {
    const [open, setOpen] = useState(false)
    const [randomHadith, setRandomHadith] = useState<null | THadithItem>(null)
    const [isMounted, setIsMounted] = useState(false)

    // التأكد من استقرار المكون على المتصفح تماماً قبل تفعيل النوافذ المنبثقة
    useEffect(() => {
        setIsMounted(true)
    }, [])

    if (!isMounted) {
        // إرجاع الزر فقط أثناء الـ SSR والـ Hydration الأولي ليتطابق السيرفر والعميل 100%
        return (
            <button className="flex items-center gap-2 px-4 py-2.5 bg-emerald-600 text-white font-medium text-sm rounded-xl opacity-90 font-serif">
                <Shuffle className="h-4 w-4" />
                <span>حديث عشوائي</span>
            </button>
        )
    }

    return (
        <>
            <button
                onClick={() => pickRandomHadith(hadiths, setRandomHadith, setOpen)}
                className="flex items-center gap-2 px-4 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-medium text-sm rounded-xl shadow-sm hover:shadow transition-all font-serif cursor-pointer active:scale-95"
            >
                <Shuffle className="h-4 w-4" />
                <span>حديث عشوائي</span>
            </button>

            {/* الـ Dialog الآن معزول تماماً ومحمي من الـ SSR المربك لـ Radix UI */}
            <Dialog open={open} onOpenChange={setOpen}>
                <DialogContent dir="rtl" className="max-w-xl w-[95vw] font-serif text-right rounded-2xl p-6 border border-slate-100 shadow-2xl">
                    <DialogHeader className="border-b pb-3">
                        <DialogTitle className="text-xl font-bold text-emerald-800 flex items-center gap-2">
                            <Shuffle className="h-5 w-5 text-emerald-600" />
                            <span>حديث عشوائي مقتبس</span>
                        </DialogTitle>
                    </DialogHeader>
                    
                    {randomHadith && (
                        <div className="space-y-4 pt-4">
                            <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-200/60 text-xs text-slate-500 space-y-1">
                                <p><strong>المصدر:</strong> {randomHadith.book.bookName}</p>
                                <p><strong>التبويب:</strong> {randomHadith.chapter.chapterArabic}</p>
                                <p><strong>رقم الحديث:</strong> {randomHadith.hadithNumber}</p>
                            </div>
                            <p className="text-slate-950 text-xl leading-loose tracking-wide bg-emerald-50/30 p-4 rounded-xl border border-emerald-100 font-medium">
                                {randomHadith.hadithArabic}
                            </p>
                        </div>
                    )}
                </DialogContent>
            </Dialog>
        </>
    )
}