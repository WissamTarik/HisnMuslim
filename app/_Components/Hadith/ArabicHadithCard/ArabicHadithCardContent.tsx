import { HighlightedArabicText } from "../HighlightedArabicText"

type TArabicHadithCardContentProps={
     headingArabic?: string
  chapterArabic: string
  hadithArabic: string
  highlightTerm: string
}
export default function ArabicHadithCardContent({headingArabic,hadithArabic,chapterArabic,highlightTerm}:TArabicHadithCardContentProps) {
  return (
    <>
           <div className="p-6 space-y-4">
                      {headingArabic && (
                          <h3 className="text-lg font-bold text-emerald-800 border-r-4 border-emerald-600 pr-3 mb-2 leading-relaxed line-clamp-1">
                              <HighlightedArabicText text={headingArabic} term={highlightTerm} />
                          </h3>
                      )}
                      
                      <span className="inline-block text-xs font-semibold text-slate-400 bg-slate-100 px-2 py-1 rounded-sm">
                          {chapterArabic}
                      </span>
      
                      <p className="text-slate-900 text-xl leading-loose tracking-wide antialiased line-clamp-3 pt-1">
                          <HighlightedArabicText text={hadithArabic} term={highlightTerm} />
                      </p>
                      
                      <div className="text-left pt-2">
                          <span className="text-xs text-emerald-600 font-sans font-medium">انقر لعرض الحديث تفصيلياً وبطاقة التوثيق ←</span>
                      </div>
                  </div>
    </>
  )
}
