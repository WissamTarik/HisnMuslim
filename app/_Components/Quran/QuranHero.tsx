import { BookOpen } from "lucide-react";

export default function QuranHero() {
  return (
    <>
             <div className="relative overflow-hidden rounded-3xl bg-linear-to-br from-emerald-800 to-teal-900 text-white p-8 md:p-12 text-center shadow-xl border border-emerald-900">
          <div className="absolute inset-0 opacity-10 font-serif text-2xl md:text-3xl select-none pointer-events-none tracking-widest leading-loose text-justify p-4 overflow-hidden mask-image-[linear-gradient(to_bottom,white,transparent)]">
            {Array(15).fill("۞ لَا إِلَٰهَ إِلَّا اللَّهُ مُحَمَّدٌ رَسُولُ اللَّهِ ۞ الرَّحْمَٰنُ عَلَّمَ الْقُرْآنَ ۞ خَلَقَ الْإِنْسَانَ عَلَّمَهُ الْبَيَانَ ").join(" ")}
          </div>

          <div className="relative z-10 space-y-4 max-w-2xl mx-auto">
            <div className="flex items-center justify-center gap-2">
              <span className="text-4xl text-emerald-300/30 font-serif select-none">﴾</span>
              <span className="text-3xl text-emerald-300 font-serif antialiased tracking-wide">﷽</span>
              <span className="text-4xl text-emerald-300/30 font-serif select-none">﴿</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold font-serif flex items-center justify-center gap-3 drop-shadow-md">
              <BookOpen className="h-8 w-8 text-emerald-300" />
              <span>فهرس سور القرآن الكريم</span>
            </h1>
            <p className="text-xs md:text-sm text-emerald-100/80 font-sans max-w-md mx-auto leading-relaxed">
              مصحف إلكتروني أكاديمي متكامل بالرسم العثماني المعتمد، مخصص للقراءة الواعية والمشاركة السريعة والتدبر.
            </p>
          </div>
        </div>

    </>
  )
}
