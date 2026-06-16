import { Moon, Sparkles, Sun } from 'lucide-react';
import { AzkarCategoryCard } from '../_Components';
import { Metadata } from 'next';
export const metadata:Metadata={
   title: "الأذكار اليومية",
  description:
    "اقرأ أذكار الصباح والمساء وأذكار ما بعد الصلاة بطريقة سهلة ومنظمة تساعدك على المواظبة اليومية.",
}
export default function azkarCategories() {
  const categories = [
    { 
      id: 'sabach', 
      name: 'أذكار الصباح', 
      icon: <Sun className="h-6 w-6 text-amber-500" />, 
      description: 'تبدأ من بعد صلاة الفجر إلى طلوع الشمس',
      color: 'from-amber-400 to-orange-500' 
    },
    { 
      id: 'masaa', 
      name: 'أذكار المساء', 
      icon: <Moon className="h-6 w-6 text-indigo-500" />, 
      description: 'تبدأ من بعد صلاة العصر إلى غروب الشمس',
      color: 'from-indigo-500 to-purple-700' 
    },
    { 
      id: 'postPrayer', 
      name: 'أذكار بعد الصلاة', 
      icon:<Sparkles className="h-6 w-6 text-emerald-500" /> , 
      description: 'التحصينات والأدعية المستحبة فور الانتهاء من الفريضة',
      color: 'from-slate-700 to-slate-900' 
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 py-12 px-4 sm:px-6 lg:px-8" id="rtl">
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h1 className="text-3xl font-extrabold text-slate-900 dark:text-white sm:text-4xl">
          الأذكار اليومية
        </h1>
        <p className="mt-3 max-w-2xl mx-auto text-xl text-slate-500 dark:text-slate-400 sm:mt-4">
          اختر الفئة التي تود قراءتها الآن ونوّر يومك بذكر الله
        </p>
      </div>

      {/* Grid متجاوب: عمود واحد للموبايل، وعمودين للشاشات المتوسطة، و3 للشاشات الكبيرة */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((category) => (
        <AzkarCategoryCard {...category} key={category.id}/>
        ))}
      </div>
    </div>
  );
}