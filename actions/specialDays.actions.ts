"use server"

import { TSpecialDay } from "@/types/specialDays.types";

export async function getSpecialDays():Promise<TSpecialDay[]> {

    try {
        const response=await fetch(`https://api.aladhan.com/v1/specialDays`,{
            next:{
                revalidate:86400
            }
        })
if (!response.ok) throw new Error("فشل جلب البيانات");   
     const json=await response.json()
     return json.data
    } catch (error) {
        console.error(error);
      return []        
    }
    
}
export async function  getCurrentIslamicMonth():Promise<number> {

    try {
        const response=await fetch(`https://api.aladhan.com/v1/currentIslamicMonth`)
        if(!response.ok)
            throw new Error("فشل جلب الشهر الهجري الحالي");
        const json=await response.json()
        return parseInt(json.data)
    } catch (error) {
        console.error(error);
        return 0
        
    }
    
}