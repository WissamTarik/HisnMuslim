import { STATUS_CONFIG } from "@/constants/hadith"

type TArabicHadithCardHeaderProps={
    hadithNumber:string,
    status:"Sahih" | "Hasan" | "Da`eef",
    bookName:string
}
export default function ArabicHadithCardHeader({hadithNumber,status,bookName}:TArabicHadithCardHeaderProps) {
     const currentStatus = STATUS_CONFIG[status] || { label: status, css: "bg-slate-100 text-slate-700 border-slate-200" }

    return (
    <>
      <div className="bg-slate-50 px-5 py-3.5 border-b border-slate-100 flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                    <span className="font-bold text-slate-800 text-lg">{bookName}</span>
                    <span className="text-xs font-sans font-medium bg-slate-200 text-slate-700 px-2.5 py-0.5 rounded-md">
                        رقم: {parseInt(hadithNumber) + 1}
                    </span>
                </div>
                <span className={`text-xs px-3 py-0.5 font-medium rounded-full border ${currentStatus.css}`}>
                    {currentStatus.label}
                </span>
            </div>

    </>
  )
}
