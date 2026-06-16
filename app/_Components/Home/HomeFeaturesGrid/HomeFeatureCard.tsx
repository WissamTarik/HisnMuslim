import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card'
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
type THomeFeatureCardProps={
     title: string;
    description: string;
    icon: React.JSX.Element;
    link: string;
    badge: string;
}
export default function HomeFeatureCard({title,description,icon,link,badge}:THomeFeatureCardProps) {
    
  return (
    <>
        <Card
              className="group hover:-translate-y-2 transition-all duration-300 bg-white dark:bg-slate-900 border-slate-200/60 dark:border-slate-800"
            >
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-5">
                  <div className="p-3 rounded-xl bg-slate-100 dark:bg-slate-800">
                    {icon}
                  </div>
                  <span className="text-xs px-2 py-1 rounded-md bg-slate-100 dark:bg-slate-800 font-medium">
                    {badge}
                  </span>
                </div>

                <h3 className="font-bold text-xl mb-3 text-slate-800 dark:text-slate-100">
                  {title}
                </h3>

                <p className="text-slate-500 dark:text-slate-400 text-sm leading-7 mb-5 min-h-14">
                  {description}
                </p>

                <Link href={link}>
                  <Button variant="link" className="p-0 text-emerald-600 dark:text-emerald-400 font-bold h-auto cursor-pointer inline-flex items-center group/btn">
                    انتقـل الآن
                    <ArrowLeft className="h-4 w-4 mr-1 transition-transform group-hover/btn:-translate-x-1" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
    </>
  )
}
