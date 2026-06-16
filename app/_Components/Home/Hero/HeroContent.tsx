import { Button } from '@/components/ui/button'
import { Compass } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import HeroStatistics from './HeroStatistics'

export default function HeroContent() {
  return (
    <>
         <div className="text-center xl:text-right space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-emerald-100 border border-white/10 backdrop-blur-sm">
                <Compass className="h-4 w-4" />
                رفيقك الإسلامي اليومي
              </div>

              <div className="space-y-4">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight">
                  اجعل القرآن والأذكار
                  <span className="block text-emerald-300 mt-2">
                    جزءاً من يومك
                  </span>
                </h1>

                <p className="text-lg text-emerald-50/80 max-w-xl mx-auto xl:mx-0">
                  منصة إسلامية متكاملة تجمع القرآن الكريم، الأذكار اليومية، الأحاديث النبوية، مواقيت الصلاة، القبلة، وأسماء الله الحسنى.
                </p>
              </div>

              <div className="flex flex-wrap justify-center xl:justify-start gap-4">
                <Link href="/quranMeta">
                  <Button size="lg" className="bg-white text-emerald-900 hover:bg-emerald-50 cursor-pointer">
                    ابدأ بقراءة القرآن
                  </Button>
                </Link>

                <Link href="/about">
                  <Button size="lg" variant="outline" className="border-white/20 bg-white/5 text-white hover:bg-white/10 cursor-pointer">
                    تعرف علينا
                  </Button>
                </Link>
              </div>

              {/* STATS */}
         <HeroStatistics/>
            </div>
    </>
  )
}
