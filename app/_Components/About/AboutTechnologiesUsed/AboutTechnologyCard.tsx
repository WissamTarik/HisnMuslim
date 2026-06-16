import { Card, CardContent } from '@/components/ui/card'
import React from 'react'
type TAboutTechnologyCardProps={
    name:string,
    color:string
}
export default function AboutTechnologyCard({color,name}:TAboutTechnologyCardProps) {
  return (
    <>
       <Card className={`bg-white dark:bg-slate-900 border ${color} shadow-xs hover:scale-102 transition-transform`}>
                <CardContent className="p-5 text-center font-bold text-sm sm:text-base">
                  {name}
                </CardContent>
              </Card>
    </>
  )
}
