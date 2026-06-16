

import { Metadata } from "next";
import { Hero, HomeFeaturesGrid } from "./_Components";
export const metadata:Metadata={
    title: "الصفحة الرئيسية | منصة إسلامية متكاملة",
    description:
    "منصة إسلامية تجمع القرآن الكريم، الأذكار اليومية، الأحاديث النبوية، مواقيت الصلاة، اتجاه القبلة، أسماء الله الحسنى، ومحول التاريخ الهجري في مكان واحد.",

}
export default function HomePage() {

  return (
    <main className="min-h-screen bg-slate-50 dark:bg-slate-950" dir="rtl">
      {/* HERO */}
          <Hero/>

      {/* FEATURES */}
      <section className="max-w-7xl mx-auto px-4 py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-black text-slate-900 dark:text-white">
            أدوات المنصة
          </h2>
          <p className="mt-3 text-slate-500 dark:text-slate-400">
            كل ما تحتاجه في مكان واحد
          </p>
        </div>

       <HomeFeaturesGrid/>
      </section>
    </main>
  );
}