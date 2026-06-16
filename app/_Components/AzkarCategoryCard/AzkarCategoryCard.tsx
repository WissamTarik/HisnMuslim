import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import Link from 'next/link'
import { ReactNode } from 'react'
type TAzkarCategoryCardProps={
    id:string,
    name:string,
    icon:ReactNode,
    description:string,
    color:string
}
export default function AzkarCategoryCard({id,name,icon,description,color}:TAzkarCategoryCardProps) {
  return (
    <>
      
          <Card 
            className="flex flex-col h-full overflow-hidden border border-slate-200 dark:border-slate-800 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
          >
            <div className={`h-24 bg-linear-to-r ${color} flex items-center justify-center relative`}>
              <span className="text-4xl absolute -bottom-5 bg-white dark:bg-slate-900 p-3 rounded-full shadow-md border border-slate-100 dark:border-slate-800">
                {icon}
              </span>
            </div>

            <CardHeader className="text-center pt-8 pb-4 grow">
              <CardTitle className="text-xl font-bold text-slate-800 dark:text-slate-100">
                {name}
              </CardTitle>
              <CardDescription className="text-sm mt-2 text-slate-500 dark:text-slate-400">
                {description}
              </CardDescription>
            </CardHeader>

            <CardContent className="pt-0 pb-6 px-6 text-center mt-auto">
              <Link href={`/azkar/${id}`} >
                <Button className="w-full cursor-pointer bg-slate-900 text-white hover:bg-slate-800 dark:bg-slate-100 dark:text-slate-900 dark:hover:bg-slate-200 font-medium py-2 rounded-lg transition-colors">
                  قراءة الأذكار ←
                </Button>
              </Link>
            </CardContent>
          </Card>
    </>
  )
}
