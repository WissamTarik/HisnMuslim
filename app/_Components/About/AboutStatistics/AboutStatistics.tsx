import { Card, CardContent } from "@/components/ui/card";
import { ABOUT_STATISTICS } from "@/constants/about";

export default function AboutStatistics() {
  return (
    <>
          <section>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {ABOUT_STATISTICS.map((stat, idx) => (
              <Card key={idx} className="bg-white dark:bg-slate-900 border-slate-200/60 dark:border-slate-800 shadow-xs hover:shadow-md transition-shadow">
                <CardContent className="p-6 text-center space-y-2">
                  <div className="text-3xl font-black text-emerald-600 dark:text-emerald-400">
                    {stat.value}
                  </div>
                  <div className="text-xs md:text-sm font-medium text-slate-500 dark:text-slate-400">
                    {stat.label}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
    </>
  )
}
