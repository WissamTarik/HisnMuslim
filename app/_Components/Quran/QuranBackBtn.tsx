import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function QuranBackBtn() {
  return (
    <>
                  <Link href="/quranMeta" className="inline-flex items-center gap-2 text-sm text-emerald-700 hover:text-emerald-800 font-sans transition-colors group">
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                العودة إلى فهرس القرآن الكريم
            </Link>

    </>
  )
}
