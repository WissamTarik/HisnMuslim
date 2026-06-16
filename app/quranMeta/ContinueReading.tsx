"use client"

import { ArrowLeft, Bookmark } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

type TContinueReadingProps={
    name:string,
    number:number
}
export default function ContinueReading({allSurahs}:{allSurahs:TContinueReadingProps[]}) {
    const [surahName, setSurahName] = useState<string>("");
    const [lastSurahNumber, setLastSurahNumber] = useState<number|null>(null);
    useEffect(() => {
    const saved=localStorage.getItem("lastReadSurah")
    if(saved){
        const surahNum=parseInt(saved)
        setLastSurahNumber(surahNum)
      const found=allSurahs?.find((s)=>s.number===surahNum)
      if(found)
        setSurahName(found.name)

    }
    }, [allSurahs]);
    if(!surahName||!lastSurahNumber) return null
  return (
    <>
      <div className="max-w-4xl mx-auto px-1 animate-in fade-in slide-in-from-top-4 duration-500 font-sans">
      <div className="bg-linear-to-r from-amber-500/10 via-amber-600/5 to-transparent border border-amber-500/20 rounded-2xl p-4 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xs">
        
        <div className="flex items-center gap-3 text-right w-full sm:w-auto">
          {/* أيقونة الفاصل المذهبة التفاعلية */}
          <div className="p-2.5 bg-amber-500 text-amber-950 rounded-xl shadow-inner shrink-0">
            <Bookmark className="h-5 w-5 fill-amber-950/20" />
          </div>
          <div className="space-y-0.5">
            <h3 className="text-xs font-bold text-amber-800 tracking-wide uppercase">متابعة القراءة والورد اليومي</h3>
            <p className="text-sm font-serif font-bold text-slate-800">
              لقد توقفت سابقاً عند <span className="text-amber-700 underline decoration-wavy decoration-amber-400/60 underline-offset-4 font-black">سورة {surahName}</span>
            </p>
          </div>
        </div>

        {/* زر الانتقال السريع المفعم بالحركة */}
        <Link
          href={`/surah/${lastSurahNumber}`}
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-amber-500 hover:bg-amber-600 text-white rounded-xl text-xs font-bold font-sans transition-all shadow-xs hover:shadow-md hover:-translate-x-0.5 active:scale-98 group shrink-0"
        >
          <span>استكمال القراءة الآن</span>
          <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
        </Link>
        
      </div>
    </div>
    </>
  )
}
