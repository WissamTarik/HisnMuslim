import { BookDown, BookOpen, Calendar, Compass } from 'lucide-react'
import React from 'react'

export default function HeroVisual() {
  return (
    <>
             <div className="flex justify-center">
  <div className="relative w-full max-w-sm sm:max-w-md">
    <div className="absolute inset-0 bg-emerald-400/20 blur-3xl rounded-full" />

    <div className="relative rounded-[32px] bg-white/10 backdrop-blur-md border border-white/10 p-6 sm:p-8 shadow-2xl">
      <div className="text-center space-y-6">
        
        {/* ⭐ التعديل السحري هنا: الخط يصغر ديناميكياً مع حجم الشاشة دون أي قطع أو اختفاء */}
        <div className="text-[9vw] xs:text-[7vw] sm:text-5xl md:text-6xl font-normal text-emerald-300 select-none text-center leading-none tracking-wide transition-all duration-300">
        بسم الله الرحمن الرحيم 
        </div>

        <div>
          <h3 className="text-2xl font-bold text-white">
            منصة إسلامية متكاملة
          </h3>
          <p className="text-emerald-100/70 mt-2 text-sm sm:text-base">
            القرآن والأذكار ومواقيت الصلاة
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div className="rounded-xl bg-white/5 p-4 border border-white/10">
            <BookDown className="mx-auto h-6 w-6 text-emerald-300 mb-2" />
            <p className="text-sm text-white">القرآن</p>
          </div>
          <div className="rounded-xl bg-white/5 p-4 border border-white/10">
            <BookOpen className="mx-auto h-6 w-6 text-amber-300 mb-2" />
            <p className="text-sm text-white">الأذكار</p>
          </div>
          <div className="rounded-xl bg-white/5 p-4 border border-white/10">
            <Compass className="mx-auto h-6 w-6 text-sky-300 mb-2" />
            <p className="text-sm text-white">القبلة</p>
          </div>
          <div className="rounded-xl bg-white/5 p-4 border border-white/10">
            <Calendar className="mx-auto h-6 w-6 text-orange-300 mb-2" />
            <p className="text-sm text-white">التاريخ</p>
          </div>
        </div>

      </div>
    </div>
  </div>
</div>
    </>
  )
}
