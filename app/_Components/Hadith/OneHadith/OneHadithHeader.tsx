import { BookOpen } from 'lucide-react'
type THadithHeaderProps={
    status:string
}
export default function OneHadithHeader({status}:THadithHeaderProps) {
  return (
    <>
      <div className="border-b pb-4 flex items-center justify-between">
                    <div className="flex items-center gap-2 text-xl font-bold text-emerald-800">
                        <BookOpen className="h-6 w-6 text-emerald-600" />
                        <h1>حديث نبوي شريف</h1>
                    </div>
                    {status && (
                        <span className="bg-emerald-600 text-white px-3 py-1 rounded-full text-xs font-sans font-medium">
                            {status}
                        </span>
                    )}
                </div>

    </>
  )
}
