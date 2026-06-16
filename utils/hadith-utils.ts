import { THadithItem } from "@/types/hadith.types"


export function createPageUrl(pageNumber: number, currentBook: string, currentStatus: string, currentQuery: string) {
    const params = new URLSearchParams()
    params.set("book", currentBook)
    if (currentStatus !== "all")
        params.set("status", currentStatus)
    if (currentQuery)
        params.set("q", currentQuery)
    params.set("page", pageNumber.toString())
    return `/hadith?${params.toString()}`
}
export async function handleCopy(fullText:string,setCopy:(copy:boolean)=>void) {
     try {
      await  navigator.clipboard.writeText(fullText)
      setCopy(true)
      setTimeout(() => {
        setCopy(false)
      }, 2000);
     } catch (error) {
         console.error("فشل نسخ النص", error)
     }
}
export async function handleShare(fullText:string,setCopy:(copy:boolean)=>void,bookName:string) {
    try {
        await navigator.share({
            title:bookName,
            text:fullText,
            url:window.location.href
        })
    } catch (error) {
        handleCopy(fullText,setCopy)
        alert("المشاركة غير مدعومة على هذا المتصفح، تم نسخ نص الحديث بدلاً من ذلك.")
    }
}
export async function pickRandomHadith(hadiths:THadithItem[],setRandomHadith:(hadith:THadithItem|null)=>void,setOpen:(open:boolean)=>void) {
    if(!hadiths||hadiths.length===0)return;
    const randomIndex=Math.floor((Math.random()*hadiths.length))
    setRandomHadith(hadiths[randomIndex])
    setOpen(true)
    
}
export async function handleGetHadithByNumberModal(id:string,book:string,setLoading:(loading:boolean)=>void,setHadith:(data:THadithItem|null)=>void) {
    if (id) {
       
        setLoading(true)
        fetch(`/api/hadith?hadithNumber=${id}&book=${book}`)
            .then((res) => res.json())
            .then((data:THadithItem) => {
                setHadith(data)
                setLoading(false)
            })
            .catch((err) => {
                console.error("Error fetching hadith:", err)
                setLoading(false)
            })
    }
}