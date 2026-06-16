import { Card, CardContent } from "@/components/ui/card";
import { BookDown, BookOpen, Calendar, Compass, Milestone, ScrollText, Sparkles } from "lucide-react";

export default function AboutFeatures() {
     const features = [
    {
      title: "القرآن الكريم",
      icon: <BookDown className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />,
    },
    {
      title: "مواقيت الصلاة",
      icon: <ScrollText className="h-6 w-6 text-emerald-500 dark:text-emerald-400" />,
    },
    {
      title: "الأذكار اليومية",
      icon: <BookOpen className="h-6 w-6 text-amber-500 dark:text-amber-400" />,
    },
    {
      title: "اتجاه القبلة",
      icon: <Milestone className="h-6 w-6 text-rose-500 dark:text-rose-400" />,
    },
    {
      title: "الأحاديث النبوية",
      icon: <Compass className="h-6 w-6 text-sky-500 dark:text-sky-400" />,
    },
    {
      title: "أسماء الله الحسنى",
      icon: <Sparkles className="h-6 w-6 text-indigo-500 dark:text-indigo-400" />,
    },
    {
      title: "محول التاريخ",
      icon: <Calendar className="h-6 w-6 text-orange-500 dark:text-orange-400" />,
    },
  ];

  return (
    <>
        <section className="space-y-10">
          <div className="text-center space-y-3">
            <h2 className="text-3xl font-black text-slate-900 dark:text-white">
              ماذا توفر المنصة؟
            </h2>
            <p className="text-sm text-slate-500 dark:text-slate-400 max-w-md mx-auto">
              حزمة متكاملة من الخدمات والأدوات الإسلامية المجهزة خصيصاً لتكون رفيقة برمجية ليومك.
            </p>
          </div>

          {/* تعديل التجاوب ليصبح متزناً ومريحاً عبر الشاشات المختلفة */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {features.map((feature, idx) => (
              <Card key={idx} className="border-slate-200/60 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-emerald-500/30 transition-colors">
                <CardContent className="p-6 text-center space-y-3">
                  <div className="flex justify-center">
                    <div className="p-2.5 bg-slate-50 dark:bg-slate-800 rounded-xl">
                      {feature.icon}
                    </div>
                  </div>
                  <h3 className="font-bold text-sm sm:text-base text-slate-800 dark:text-slate-200">
                    {feature.title}
                  </h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
    </>
  )
}
