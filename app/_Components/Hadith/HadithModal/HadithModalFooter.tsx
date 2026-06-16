type THadithModalFooterProps={
    volume:string,
    chapterId:string,
    writerName:string,
    writerDeath:string,
}
export default function HadithModalFooter({volume,writerDeath,writerName,chapterId}:THadithModalFooterProps) {
  return (
    <>
       <div className="bg-slate-50 px-6 py-4 -mx-6 -mb-6 border-t border-slate-200 text-sm text-slate-500 grid grid-cols-2 gap-4 rounded-b-2xl">
                            <div>
                                <span className="font-sans font-semibold text-slate-400 block text-xs">المصدر والتصنيف:</span>
                                <span className="font-medium text-slate-700">المجلد {volume || 1} / باب {chapterId || "غير محدد"}</span>
                            </div>
                            <div className="text-left">
                                <span className="font-sans font-semibold text-slate-400 block text-xs">المؤلف والجامع:</span>
                                <span className="font-medium text-slate-700">{writerName} ({writerDeath}هـ)</span>
                            </div>
                        </div>
    </>
  )
}
