"use server"

import { TAsmaAlHusnaNames, TAsmaAlHusnaResponse } from "@/types/asmaAlHusna.types"

export async function getAsmaAlHusnaAction(nameNumber?:number):Promise<TAsmaAlHusnaNames[]> {
    const url=nameNumber?`https://api.aladhan.com/v1/asmaAlHusna/${nameNumber}`
                        : `https://api.aladhan.com/v1/asmaAlHusna`
     try {
        const response=await fetch(url,{next:{revalidate:604800}})
        if(!response.ok) 
         throw new Error("فشل في جلب أسماء الله الحسنى");
        const json:TAsmaAlHusnaResponse=await response.json()
          return json.data
     } catch (error) {
         console.error(`Asma Al Husna error ${error}`,);
        throw new Error("فشل في جلب أسماء الله الحسنى");
        
     }                   
    
} 