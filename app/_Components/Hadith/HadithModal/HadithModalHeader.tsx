import { Bookmark, FolderOpen, Hash } from 'lucide-react'
import React from 'react'
type THadithModalHeaderProps={
    bookName:string,
    hadithNumber:string,
    chapterArabic:string,
    
}
export default function HadithModalHeader({bookName,hadithNumber,chapterArabic}:THadithModalHeaderProps) {
  return (
    <>
                              <div className="bg-slate-50 border border-slate-200/70 rounded-xl p-4 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm font-sans">
                            <div className="flex items-center gap-2.5 text-slate-700">
                                <Bookmark className="h-4 w-4 text-emerald-600 shrink-0" />
                                <span className="text-slate-400">المصدر:</span>
                                <span className="font-serif font-bold text-slate-900">{bookName}</span>
                            </div>
                            <div className="flex items-center gap-2.5 text-slate-700">
                                <Hash className="h-4 w-4 text-emerald-600 shrink-0" />
                                <span className="text-slate-400">رقم الحديث:</span>
                                <span className="font-bold text-slate-900">{hadithNumber}</span>
                            </div>
                            {chapterArabic && (
                                <div className="flex items-center gap-2.5 text-slate-700 sm:col-span-2 border-t border-slate-200/50 pt-2.5">
                                    <FolderOpen className="h-4 w-4 text-emerald-600 shrink-0" />
                                    <span className="text-slate-400">الكتاب والباب:</span>
                                    <span className="font-serif font-medium text-slate-800">{chapterArabic}</span>
                                </div>
                            )}
                        </div>

    </>
  )
}
