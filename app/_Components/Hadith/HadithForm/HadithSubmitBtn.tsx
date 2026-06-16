 "use client"

import { useFormStatus } from "react-dom"
import { Loader2 } from "lucide-react"

export default function HadithSubmitButton() {
  const { pending } = useFormStatus()

  return (
    <button
      type="submit"
      disabled={pending}
      className="w-full py-2.5 cursor-pointer bg-emerald-600 hover:bg-emerald-700 disabled:bg-emerald-400 text-white font-medium rounded-lg font-serif transition-colors shadow-xs flex items-center justify-center gap-2"
    >
      {pending ? (
        <>
          <Loader2 className="h-5 w-5 animate-spin" />
          <span>جاري تحديث النتائج...</span>
        </>
      ) : (
        <span>تطبيق الفلتر</span>
      )}
    </button>
  )
}