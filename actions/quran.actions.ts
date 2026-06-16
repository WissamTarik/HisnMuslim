"use server"

import { TSurahDetails, TSurahReferences } from "@/types/quran.types"

const BASE_URL =`https://api.alquran.cloud/v1`

export async function getQuranSurahsList():Promise<TSurahReferences[]|null> {
       try {
        const response=await fetch(`${BASE_URL}/meta`,{
            next:{
                revalidate: 604800
            }
        })
        if(!response.ok)
            throw new Error("حدث خطا في جلب الداتا")
         const json=await response.json()
         
         
         return json.data.surahs?.references??[]
        
         
       } catch (error) {
        console.error("فشل في جلب ميتا داتا",error);
        
        return null
       }
}
export async function getSurahByNumberAction(surahNumber:number):Promise<TSurahDetails|null> {
    try {
        const response = await fetch(`${BASE_URL}/surah/${surahNumber}`,
            {
                next: { revalidate: 604800 }  
            }
        )
        if(!response.ok) throw new Error("قشل في جلب السورة")
            const json=await response.json()
           return json.data
    } catch (error) {
        console.error("فشل في جلب السورة",error);
        
        return null
    }
}