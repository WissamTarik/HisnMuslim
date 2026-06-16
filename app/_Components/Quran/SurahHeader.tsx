import { TSurahDetails } from "@/types/quran.types"

type TSurahHeaderProps=(TSurahDetails|null)&{

}
export default function SurahHeader({name,number,revelationType,ayahs}:TSurahHeaderProps) {
  return (
    <>
                    
                    {/* لافتة رأس السورة المصممة بطراز المخطوطات المذهبة */}
                    <div className="relative my-6 max-w-md mx-auto text-center bg-[#dfd5bf]/10 border-y-2 border-[#c5a880] py-3 shadow-xs">
                        <div className="absolute right-2 top-1/2 -translate-y-1/2 text-[#c5a880] font-sans text-lg hidden sm:block">❖━━━━</div>
                        <div className="absolute left-2 top-1/2 -translate-y-1/2 text-[#c5a880] font-sans text-lg hidden sm:block">━━━━❖</div>
                        
                        <h1 className="text-3xl font-bold text-[#614e34] font-serif tracking-wide drop-shadow-xs">
                            {name}
                        </h1>
                        <div className="text-[11px] font-sans text-[#8a7251] font-medium mt-1 flex items-center justify-center gap-3">
                            <span>آياتها: {ayahs.length}</span>
                            <span>•</span>
                            <span>{revelationType === "Meccan" ? "مكيّة" : "مدنيّة"}</span>
                            <span>•</span>
                            <span>ترتيبها: {number}</span>
                        </div>

                   
                </div>
    </>
  )
}
