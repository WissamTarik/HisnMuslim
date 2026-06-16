"use server"
export async function getQiblaAction(latitude:number,longitude:number):Promise<number|null> {

    try {
       const response =await fetch(`https://api.aladhan.com/v1/qibla/${latitude.toString()}/${longitude.toString()}`)
        if (!response.ok) throw new Error("فشل جلب البيانات");   
       const json=await response.json()
          return json.data.direction

    } catch (error) {
        console.error(`فشل في جلب القبلة`,error);
        return null
    }
    
}