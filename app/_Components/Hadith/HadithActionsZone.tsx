"use client"

import { useState } from "react"
import { Check, Copy, Share2 } from "lucide-react"
import { handleCopy, handleShare } from "@/utils/hadith-utils"

type TActionsProps = {
    hadithArabic: string
    bookName: string
    hadithNumber: string
    status: string
}

export default function HadithActionsZone({ hadithArabic, bookName, hadithNumber, status }: TActionsProps) {
    const [copied, setCopied] = useState(false)

    // تجهيز النص المنسق بالكامل للمشاركة والنسخ
    const formattedText = `【 ${bookName} - رقم: ${hadithNumber} 】\n\n${hadithArabic}\n\nدرجة الصحة: ${status}`

    return (
        <div className="flex items-center gap-3 pt-2 font-sans">
            <button 
                onClick={() => handleCopy(formattedText, setCopied)}
                className="flex items-center gap-2 px-4 py-2 border border-slate-200 text-sm font-medium rounded-lg text-slate-700 bg-white hover:bg-slate-50 transition-colors cursor-pointer shadow-xs"
            >
                {copied ? (
                    <>
                        <Check className="h-4 w-4 text-emerald-600" />
                        <span className="text-emerald-600">تم النسخ بنجاح</span>
                    </>
                ) : (
                    <>
                        <Copy className="h-4 w-4 text-slate-500" />
                        <span>نسخ الحديث</span>
                    </>
                )}
            </button>

            <button 
                onClick={() => handleShare(formattedText, setCopied, bookName)}
                className="flex items-center gap-2 px-4 py-2 border border-slate-200 text-sm font-medium rounded-lg text-slate-700 bg-white hover:bg-slate-50 transition-colors cursor-pointer shadow-xs"
            >
                <Share2 className="h-4 w-4 text-slate-500" />
                <span>مشاركة الحديث</span>
            </button>
        </div>
    )
}