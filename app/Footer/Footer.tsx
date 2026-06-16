import Link from "next/link";
import {
  BookOpen,
  Heart,
  Compass,
  BookMarked,
  Calendar,
} from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      dir="rtl"
      className="mt-20 border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950"
    >
      <div className="max-w-7xl mx-auto px-4 py-12">

        <div className="grid md:grid-cols-3 gap-10">

          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="p-2 rounded-xl bg-emerald-100 dark:bg-emerald-950">
                <BookOpen className="h-5 w-5 text-emerald-600" />
              </div>

              <div>
                <h3 className="font-black text-lg">
                  حصن المسلم
                </h3>

                <p className="text-xs text-slate-500">
                  رفيقك الإسلامي اليومي
                </p>
              </div>
            </div>

            <p className="text-sm text-slate-500 leading-relaxed">
              منصة إسلامية حديثة تجمع القرآن الكريم،
              الأذكار اليومية، الأحاديث النبوية،
              مواقيت الصلاة، القبلة والتاريخ الهجري.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4">
              روابط سريعة
            </h4>

            <div className="space-y-3 text-sm">
              <Link href="/quranMeta" className="block hover:text-emerald-600">
                القرآن الكريم
              </Link>

              <Link href="/azkar" className="block hover:text-emerald-600">
                الأذكار
              </Link>

              <Link href="/hadith" className="block hover:text-emerald-600">
                الأحاديث
              </Link>

              <Link href="/qibla" className="block hover:text-emerald-600">
                القبلة
              </Link>
            </div>
          </div>

          {/* Features */}
          <div>
            <h4 className="font-bold mb-4">
              خدمات المنصة
            </h4>

            <div className="space-y-3 text-sm">

              <div className="flex items-center gap-2">
                <BookMarked className="h-4 w-4 text-emerald-600" />
                المصحف الشريف
              </div>

              <div className="flex items-center gap-2">
                <Compass className="h-4 w-4 text-sky-500" />
                اتجاه القبلة
              </div>

              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4 text-orange-500" />
                التاريخ الهجري
              </div>
            </div>
          </div>

        </div>

        <div className="mt-10 pt-6 border-t border-slate-200 dark:border-slate-800 text-center">

          <p className="text-slate-500 text-sm">
            ﴿ أَلَا بِذِكْرِ اللَّهِ تَطْمَئِنُّ الْقُلُوبُ ﴾
          </p>

          <div className="flex items-center justify-center gap-1 mt-4 text-xs text-slate-400">
            <span>
              © {year} حصن المسلم
            </span>

            <Heart className="h-3.5 w-3.5 fill-rose-500 text-rose-500" />
          </div>

        </div>
      </div>
    </footer>
  );
}