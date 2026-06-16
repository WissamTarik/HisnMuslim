import { ABOUT_TECHNOLOGIES_USED } from '@/constants/about'
import React from 'react'
import AboutTechnologyCard from './AboutTechnologyCard'

export default function AboutTechnologiesUsed() {
  return (
    <>
      
            <section className="space-y-10">
          <div className="text-center space-y-2">
            <h2 className="text-3xl font-black text-slate-900 dark:text-white">
              التقنيات المستخدمة
            </h2>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              بنية برمجية معاصرة تضمن لك أفضل وأسرع أداء ممكن
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {ABOUT_TECHNOLOGIES_USED.map((tech, idx) => (
             <AboutTechnologyCard {...tech} key={idx}/>
            ))}
          </div>
        </section>
    </>
  )
}
