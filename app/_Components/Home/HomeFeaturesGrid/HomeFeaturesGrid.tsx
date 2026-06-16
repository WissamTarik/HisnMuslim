import { BookDown, BookOpen, Calendar, Compass, Milestone, ScrollText, Sparkles } from 'lucide-react';
import HomeFeatureCard from './HomeFeatureCard';

export default function HomeFeaturesGrid() {
      const features = [
    {
      title: "القرآن الكريم",
      description:
        "Tصفح المصحف الشريف كاملاً بالرسم العثماني مع تجربة قراءة مريحة وسريعة.",
      icon: <BookDown className="h-7 w-7 text-emerald-600" />,
      link: "/quranMeta",
      badge: "114 سورة",
    },
    {
      title: "مواقيت الصلاة",
      description:
        "اعرف مواقيت الصلاة بدقة حسب موقعك الحالي مع العد التنازلي للصلاة القادمة.",
      icon: <ScrollText className="h-7 w-7 text-emerald-500" />,
      link: "/prayer",
      badge: "الأكثر استخداماً",
    },
    {
      title: "الأذكار",
      description:
        "أذكار الصباح والمساء والنوم والاستيقاظ وما بعد الصلاة.",
      icon: <BookOpen className="h-7 w-7 text-amber-500" />,
      link: "/azkar",
      badge: "حصن المسلم",
    },
    {
      title: "اتجاه القبلة",
      description:
        "تحديد اتجاه الكعبة المشرفة بدقة من أي مكان حول العالم.",
      icon: <Milestone className="h-7 w-7 text-rose-500" />,
      link: "/qibla",
      badge: "GPS",
    },
    {
      title: "الأحاديث النبوية",
      description:
        "مجموعة من الأحاديث الصحيحة مع إمكانية البحث والتصفح.",
      icon: <Compass className="h-7 w-7 text-sky-500" />,
      link: "/hadith",
      badge: "السنة النبوية",
    },
    {
      title: "أسماء الله الحسنى",
      description:
        "تدبر معاني أسماء الله الحسنى وقراءة الشروحات المختصرة.",
      icon: <Sparkles className="h-7 w-7 text-indigo-500" />,
      link: "/asmaaAlHusna",
      badge: "99 اسماً",
    },
    {
      title: "محول التاريخ",
      description:
        "التحويل بين التاريخ الهجري والميلادي بسهولة ودقة.",
      icon: <Calendar className="h-7 w-7 text-orange-500" />,
      link: "/dateConverter",
      badge: "هجري ↔ ميلادي",
    },
  ];

  return (
    <>
      
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {features.map((feature) => (
          <HomeFeatureCard {...feature} key={feature.title}/>
          ))}
        </div>
    </>
  )
}
