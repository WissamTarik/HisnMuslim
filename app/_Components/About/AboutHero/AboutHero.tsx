import React from 'react'

export default function AboutHero() {
  return (
    <>
         <section className="relative overflow-hidden rounded-3xl bg-linear-to-br from-emerald-950 via-emerald-900 to-teal-900 text-white p-8 md:p-16 shadow-xl">
          <div className="absolute inset-0 opacity-10">
            <div className="text-4xl leading-loose select-none text-center overflow-hidden h-full">
              {Array(30).fill("۞ ﷽ ۞").join(" ")}
            </div>
          </div>

          <div className="relative z-10 text-center max-w-3xl mx-auto space-y-6">
            {/* البسملة المتجاوبة الذكية لمنع التقطع */}
            <div className="text-[9vw] xs:text-[7vw] sm:text-5xl md:text-6xl font-normal text-emerald-300 select-none leading-none tracking-wide transition-all duration-300">
              بسم الله الرحمن الرحيم
            </div>

            <h1 className="text-3xl md:text-5xl font-black tracking-tight">
              منصة إسلامية متكاملة
            </h1>

            <p className="text-base md:text-lg text-emerald-50/80 leading-relaxed max-w-2xl mx-auto">
              منصة تجمع القرآن الكريم والأذكار والأحاديث ومواقيت الصلاة والقبلة وأسماء الله الحسنى في تجربة حديثة وسريعة وسهلة الاستخدام.
            </p>
          </div>
        </section>
    </>
  )
}
