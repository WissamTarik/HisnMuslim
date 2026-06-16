import { TSurahDetails } from '@/types/quran.types'
import SurahAya from './SurahAya'
type TSurahReaderProps={
    surah:TSurahDetails|null,
    backgroundColor:string,
    fontSize:string,
    borderColor:string
}
export default function SurahReader({surah,backgroundColor,borderColor,fontSize}:TSurahReaderProps) {
  return (
    <>
                     <div 
                        className="quran-wrapper text-slate-900 leading-[2.6] md:leading-[3] tracking-wide antialiased p-4 md:p-8 text-justify font-serif transition-all duration-200 rounded-xl border"
                        style={{ 
                            fontSize: fontSize,
                            backgroundColor: backgroundColor,
                            borderColor: borderColor
                        }}
                    >
                        {surah?.ayahs.map((ayah) => <SurahAya text={ayah.text}
                                     numberInSurah={ayah.numberInSurah}
                                     number={ayah.number}
                                     key={ayah.number}
                                     />
                        )}
                        
                    </div>
    </>
  )
}
