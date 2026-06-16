"use server"

import { TDateConversionData, TDateConverterApiResponse } from "@/types/dataConverter.types";

async function convertDate(dateStr:string,endpoint:string){
     try {
        
        const response=await fetch(`https://api.aladhan.com/v1/${endpoint}/${dateStr}?calendarMethod=UAQ`,{
            next:{
            revalidate:86400

            }
        })
        const json:TDateConverterApiResponse=await response.json()
        
        return json.data
    
    } catch (error) {
        console.error(error);
        return null
        
    }
}
export  const convertGregorianToHijiriAction=async(dateStr:string)
        :Promise<TDateConversionData|null>=>await convertDate(dateStr,"gToH")


export const convertHijiriToGregorianAction=async(dateStr:string)
            :Promise<TDateConversionData|null> =>await convertDate(dateStr,"hToG")