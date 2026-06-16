import { POPULAR_SURAHS } from '@/constants/quran'
import { Sparkles } from 'lucide-react'
import Link from 'next/link'

export default function PopularSurahs() {
  
  return (
    <>
       <div className="space-y-3 max-w-4xl mx-auto px-1">
          <div className="flex items-center gap-2 text-xs font-sans font-bold text-slate-500 uppercase tracking-wider">
            <Sparkles className="h-4 w-4 text-emerald-600 animate-pulse" />
            <span>سور يكثر قراءتها وزيارتها</span>
          </div>
          
          <div className="flex flex-wrap gap-2.5">
            {POPULAR_SURAHS.map((item) => (
              <Link
                key={item.number}
                href={`/surah/${item.number}`}
                className="rounded-full px-5 py-2.5 cursor-pointer bg-emerald-50 text-emerald-800 border border-emerald-100/60 font-serif font-bold text-sm shadow-xs hover:bg-emerald-600 hover:text-white hover:border-emerald-600 hover:-translate-y-0.5 hover:shadow-md transition-all duration-200 active:scale-95"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
    </>
  )
}
