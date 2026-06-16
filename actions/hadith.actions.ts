"use server"

import { THadithApiResponse, THadithItem } from "@/types/hadith.types"
import { redirect } from "next/navigation"

const APP_URL = process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000"

export async function getHadithsActions(
    book: string,
    status?: string,
    keyword?: string,
    page: string = "1"
): Promise<THadithApiResponse | null> {
    const target = new URL(`${APP_URL}/api/hadith`)
    target.searchParams.set("book", book)
    target.searchParams.set("page", page)
    target.searchParams.set("paginate", "20")

    if (status && status !== "all" && status !== "none") {
        target.searchParams.set("status", status)
    }
    if (keyword) target.searchParams.set("searchArabic", keyword)

    try {
        const response = await fetch(target.toString(), {
            next: { revalidate: 86400 }
        })
        if (!response.ok) return null
        return await response.json()
    } catch (error) {
        return null
    }
}

export async function getHadithByNumber(
    hadithNumber: string,
    book: string
) {
    
    const res = await fetch(
        `${APP_URL}/api/hadith?hadithNumber=${hadithNumber}&book=${book}`,
        {
            cache: "no-store",
        }
    )

    if (!res.ok) return null

    const data = await res.json()

    return data?.hadiths?.data?.[0] as THadithItem ?? null
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