import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

export default function AboutCTA() {
  return (
    <>
        <section className="rounded-3xl bg-linear-to-r from-emerald-700 to-teal-700 p-8 md:p-12 text-center text-white shadow-xl relative overflow-hidden">
          <div className="absolute inset-0 bg-emerald-600/10 blur-3xl rounded-full translate-y-10 animate-pulse" />
          <div className="relative z-10 space-y-6 max-w-2xl mx-auto">
            <h2 className="text-2xl md:text-4xl font-black">
              ابدأ رحلتك الإيمانية اليوم
            </h2>
            <p className="text-sm md:text-base text-emerald-50/80 leading-relaxed">
              استمتع بتجربة إسلامية متكاملة تجمع بين القرآن الكريم والأذكار والأحاديث ومواقيت الصلاة في مكان واحد وبلا أدنى تشتيت.
            </p>
            <Link href="/quranMeta" className="inline-block pt-2">
              <Button size="lg" className="bg-white text-emerald-800 hover:bg-emerald-50 font-bold px-8 h-12 rounded-xl shadow-md cursor-pointer transition-transform hover:scale-105">
                ابدأ الآن
              </Button>
            </Link>
          </div>
        </section>
    </>
  )
}
