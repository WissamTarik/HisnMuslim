import Image from "next/image";

export default function AboutMission() {
  return (
    <>
        <section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <h2 className="text-3xl font-black text-slate-900 dark:text-white relative pb-2 after:absolute after:bottom-0 after:right-0 after:h-1 after:w-12 after:bg-emerald-600 after:rounded-full">
                    رسالتنا
                  </h2>
                  <div className="space-y-4 text-slate-600 dark:text-slate-400 leading-8 text-base">
                    <p>
                      نسعى إلى توظيف التقنية الحديثة لخدمة المسلم في حياته اليومية من خلال أدوات رقمية عملية تساعده على قراءة القرآن وتدبر معانيه، المحافظة على الأذكار، ومتابعة عباداته اللحظية بدقة متناهية.
                    </p>
                    <p>
                      هدفنا الأسمى هو توفير بيئة تقنية إسلامية متكاملة ومستقرة، تتميز بالسرعة الفائقة، البساطة المتناهية، والجمال البصري الهادئ المريح للعين.
                    </p>
                  </div>
                </div>
      
                <div className="overflow-hidden rounded-3xl shadow-xl border border-white dark:border-slate-900 relative group">
                  <div className="absolute inset-0 bg-emerald-950/10 group-hover:bg-transparent transition-colors duration-300 z-10" />
                  <Image
                    src="/aboutImage.avif"
                    alt="Noble Quran book open on a wooden stand"
                    width={500}
                    height={500}
                    className="w-full h-80 md:h-96 object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
              </section>
    </>
  )
}
