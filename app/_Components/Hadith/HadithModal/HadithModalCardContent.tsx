import { THadithItem } from '@/types/hadith.types'
import HadithActionsZone from '../HadithActionsZone'
import HadithModalFooter from './HadithModalFooter'
import HadithModalHeader from './HadithModalHeader'
type THadithModalCardContentProps=THadithItem&{
formattedText:string

}
export default function HadithModalCardContent({book,hadithNumber,chapter,status,chapterId,volume,hadithArabic,formattedText}:THadithModalCardContentProps) {
  return (
    <>
        <div className="p-6 space-y-6">
                        {/* قسم تفصيل وتوثيق المرجع الإسلامي المنظم */}
<HadithModalHeader chapterArabic={chapter.chapterArabic} hadithNumber={hadithNumber} bookName={book.bookName} />
                        {/* متن الحديث الشريف */}
                        <div className="space-y-2">
                            <span className="text-xs font-sans font-bold text-slate-400 uppercase tracking-wider block">متن الحديث الشريف:</span>
                            <p className="text-slate-900 text-2xl leading-loose tracking-wide selection:bg-emerald-100 antialiased bg-emerald-50/10 p-5 rounded-xl border border-emerald-100/60 font-medium font-serif">
                                {hadithArabic}
                            </p>
                        </div>
                          <HadithActionsZone bookName={book.bookName} 
                                              hadithArabic={hadithArabic} 
                                              hadithNumber={hadithNumber}
                                              status={status}
                                              />
                   

                       <HadithModalFooter chapterId={chapterId} volume={volume} writerDeath={book.writerDeath} writerName={book.writerName}/>
                    </div>
    </>
  )
}
