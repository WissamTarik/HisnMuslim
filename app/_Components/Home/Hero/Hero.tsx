import React from 'react'
import HeroContent from './HeroContent'
import HeroVisual from './HeroVisual'
import HeroHeader from './HeroHeader'

export default function Hero() {
  return (
    <>
            <section className="relative overflow-hidden py-20 lg:py-28">
       <HeroHeader/>

        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-12 items-center">

            {/* CONTENT */}
            <HeroContent/>
            {/* VISUAL */}
               <HeroVisual/>

          </div>
        </div>
      </section>
    </>
  )
}
