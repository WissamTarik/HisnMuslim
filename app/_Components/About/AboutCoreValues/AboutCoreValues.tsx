import { Card, CardContent } from "@/components/ui/card";
import { Globe, Heart, ShieldCheck, Zap } from "lucide-react";

export default function AboutCoreValues() {
      const values = [
    {
      title: "الموثوقية",
      desc: "نعتمد على مصادر موثوقة وواجهات برمجية دقيقة لضمان صحة البيانات والمحتوى الديني.",
      icon: <ShieldCheck className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />,
    },
    {
      title: "تجربة هادئة",
      desc: "واجهة نظيفة وخالية تماماً من التشتيت والإعلانات لتوفير تجربة روحانية مريحة أثناء الاستخدام.",
      icon: <Heart className="h-6 w-6 text-rose-500 dark:text-rose-400" />,
    },
    {
      title: "سرعة الأداء",
      desc: "تم بناء المنصة باستخدام أحدث تقنيات Next.js لضمان السرعة الفائقة والاستقرار على كافة الأجهزة.",
      icon: <Zap className="h-6 w-6 text-amber-500 dark:text-amber-400" />,
    },
    {
      title: "الوصول من أي مكان",
      desc: "نعتمد على تحديد الموقع التلقائي لنوفر لك خدمات دقيقة أينما كنت حول العالم.",
      icon: <Globe className="h-6 w-6 text-sky-500 dark:text-sky-400" />,
    },
  ];

  return (
    <>
           <section className="space-y-10">
          <div className="text-center space-y-2">
            <h2 className="text-3xl font-black text-slate-900 dark:text-white">
              المبادئ التي نلتزم بها
            </h2>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              الأسس والقيم التقنية والدينية التي بنينا عليها هذا العمل
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, idx) => (
              <Card key={idx} className="bg-white dark:bg-slate-900 border-slate-200/60 dark:border-slate-800 shadow-xs hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <CardContent className="p-6 space-y-4">
                  <div className="w-fit p-3 rounded-2xl bg-slate-50 dark:bg-slate-800">
                    {value.icon}
                  </div>
                  <h3 className="font-bold text-lg text-slate-800 dark:text-slate-100">
                    {value.title}
                  </h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed min-h-18">
                    {value.desc}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
    </>
  )
}
