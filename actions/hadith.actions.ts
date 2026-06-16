"use server"

import { THadithApiResponse, THadithItem } from "@/types/hadith.types"
import { redirect } from "next/navigation"

// تأكدي من كتابة الرابط بدون "/" في النهاية إذا تم استخدامه، ولكن الأفضل استخدام التوجيه النسبي إن أمكن ببيئات أخرى
const APP_URL = process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000"

export async function getHadithsActions(
    book: string,
    status?: string,
    keyword?: string,
    page: string = "1"
): Promise<THadithApiResponse | null> {

    // الحل السحري لـ Vercel: إذا كنا على سيرفر فيرسيل، نستخدم الرابط المحلي الداخلي للسيرفر 127.0.0.1 أو VERCEL_URL الأصلي
    const baseUrl = process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : APP_URL
    const target = new URL(`${baseUrl}/api/hadith`)

    target.searchParams.set("book", book)
    target.searchParams.set("page", page)
    target.searchParams.set("paginate", "20")

    if (status && status !== "all" && status !== "none") {
        target.searchParams.set("status", status)
    }
    if (keyword) target.searchParams.set("searchArabic", keyword)

    try {
        const response = await fetch(target.toString(), {
            next: { revalidate: 86400 } // كاش لمدة يوم
        })

        if (!response.ok) {
            console.error(`Fetch failed with status: ${response.status}`)
            return null
        }

        const json = await response.json()
        return json
    } catch (error) {
        console.error("Hadith Fetch Error on Vercel Server:", error)
        return null
    }
}

export async function getHadithByNumber(hadithNumber: string, book: string) {
    const baseUrl = process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : APP_URL

    try {
        const res = await fetch(
            `${baseUrl}/api/hadith?hadithNumber=${hadithNumber}&book=${book}`,
            { next: { revalidate: 86400 } }
        )
        if (!res.ok) return null
        const data = await res.json()
        return data?.hadiths?.data?.[0] as THadithItem ?? null
    } catch (error) {
        console.error("Detail Fetch Error on Vercel Server:", error)
        return null
    }
}

export async function handleSearchAction(formData: FormData) {
    const targetBook = formData.get("bookSelectForm")?.toString() || formData.get("bookSelect")?.toString() || "sahih-bukhari"
    const targetStatus = formData.get("statusSelectForm")?.toString() || formData.get("statusSelect")?.toString() || "all"

    const params = new URLSearchParams()
    params.set("book", targetBook)

    if (targetStatus && targetStatus !== "all" && targetStatus !== "none") {
        params.set("status", targetStatus)
    }

    params.set("page", "1")
    redirect(`/hadith?${params.toString()}`)
}