import { TAsmaAlHusnaNames } from "@/types/asmaAlHusna.types"

 

 export function filterAsmaaName(searchLog:string,names:TAsmaAlHusnaNames[]){
   return names.filter((item) => {
    if (!searchLog) return true

    const matchNumber = item.number.toString().includes(searchLog)
    
    const matchTransliteration = item.transliteration.toLowerCase().includes(searchLog)
    const matchMeaning = item.en.meaning.toLowerCase().includes(searchLog)

    return matchNumber  || matchTransliteration || matchMeaning
  })
  }