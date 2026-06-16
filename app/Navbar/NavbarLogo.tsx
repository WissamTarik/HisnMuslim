import { BookOpen } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

export default function NavbarLogo() {
  return (
    <>
            <Link
        href="/"
        className="flex items-center gap-2 shrink-0 group"
      >
        <div className="p-2 rounded-xl bg-emerald-100 dark:bg-emerald-950/50 transition-colors">
          <BookOpen className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
        </div>

        <div>
          <h1 className="font-black text-base xl:text-lg text-slate-900 dark:text-white">
            حصن المسلم
          </h1>
          <p className="hidden xl:block text-[10px] text-slate-500 dark:text-slate-400">
            القرآن • الأذكار • القبلة
          </p>
        </div>
      </Link>
    </>
  )
}
