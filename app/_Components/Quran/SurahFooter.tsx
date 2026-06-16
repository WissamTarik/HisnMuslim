import { Info } from 'lucide-react'
type TSurahFooterProps={
    englishName:string,
    englishNameTranslation:string,
}
export default function SurahFooter({englishName,englishNameTranslation}:TSurahFooterProps) {
  return (
    <>
      
                <div className="mt-6 px-4 py-2 border-t border-[#e9dfcc] text-[11px] font-sans text-slate-400 flex flex-col sm:flex-row justify-between items-center gap-2">
                    <span className="flex items-center gap-1">
                        <Info className="h-3 w-3 text-slate-300" />
                        الرسم العثماني المعتمد برواية حفص عن عاصم
                    </span>
                    <span className="text-right">{englishName} • {englishNameTranslation}</span>
                </div>
    </>
  )
}
