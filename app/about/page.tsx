import { Metadata } from "next";
import { AboutCoreValues, AboutCTA, AboutFeatures, AboutHero, AboutMission, AboutStatistics, AboutTechnologiesUsed } from "../_Components";
export const metadata:Metadata={
 title: "حول المنصة | تعرف على رؤيتنا ورسالتنا",
  description:
    "تعرف على رسالة المنصة الإسلامية وأهدافها، وكيف نوظف التقنيات الحديثة لتوفير تجربة إسلامية متكاملة تشمل القرآن الكريم والأذكار ومواقيت الصلاة والقبلة"}
export default function AboutPage() {

 
  return (
    <main className="min-h-screen bg-slate-50 dark:bg-slate-950 py-12" dir="rtl">
      <div className="max-w-6xl mx-auto px-4 space-y-24">

           <AboutHero/>

          <AboutMission/>

            <AboutStatistics/>

      <AboutFeatures/>
        <AboutCoreValues/>

     <AboutTechnologiesUsed/>

      <AboutCTA/>

      </div>
    </main>
  );
}