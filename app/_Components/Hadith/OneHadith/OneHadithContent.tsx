import React from 'react'
import HadithActionsZone from '../HadithActionsZone'
import { THadithItem } from '@/types/hadith.types'
type TOneHadithContentProps=THadithItem
export default function OneHadithContent({hadithArabic,book,hadithNumber,status,chapter}:TOneHadithContentProps) {
  return (
    <>
                      <div className="space-y-4">
                          <p className="text-slate-950 text-2xl leading-loose tracking-wide bg-emerald-50/20 p-6 rounded-xl border border-emerald-100 font-medium">
                              {hadithArabic}
                          </p>
                          
                          {/* أزرار النسخ والمشاركة المضافة حديثاً ⭐⭐⭐ */}
                          <HadithActionsZone 
                              hadithArabic={hadithArabic}
                              bookName={book?.bookName || "غير متوفر"}
                              hadithNumber={hadithNumber}
                              status={status || "غير محدد"}
                          />
                      </div>
      
                      {/* تخريج الحديث الشريف */}
                      <div className="bg-slate-50 p-4 rounded-xl border border-slate-200/80 text-sm text-slate-600 space-y-2.5 font-sans">
                          <p><strong>المصدر الأساسي:</strong> {book?.bookName || "غير متوفر"}</p>
                          {chapter?.chapterArabic && (
                              <p><strong>كتاب / باب:</strong> {chapter.chapterArabic}</p>
                          )}
                          <p><strong>الرقم التسلسلي الدولي:</strong> {hadithNumber}</p>
                      </div>
    </>
  )
}
