import { THadithApiResponse } from "@/types/hadith.types"
import { NextRequest, NextResponse } from "next/server"



export async function GET(request: NextRequest) {
    try {
        const API_KEY = process.env.HADITH_API_KEY
        const BASE_URL = "https://hadithapi.com/api/hadiths"
        
        if (!API_KEY) {
            console.error("Hadith Explorer Error: HADITH_API_KEY environment variable is not defined.")
            return NextResponse.json({ message: "Configuration error on server" }, { status: 500 })
        }

        const { searchParams } = request.nextUrl
        const url = new URL(BASE_URL)
        
        url.searchParams.set("apiKey", API_KEY)
        
        const book = searchParams.get("book")
        const searchArabic = searchParams.get("searchArabic")
        const status = searchParams.get("status")
        const hadithNumber = searchParams.get("hadithNumber")
        const page = searchParams.get("page")||"1"
        const paginate = searchParams.get("paginate")||"20"
        
        
        if (book) url.searchParams.set("book", book)
        if (searchArabic) url.searchParams.set("hadithArabic", searchArabic)
        if (status) url.searchParams.set("status", status)
        if (hadithNumber) url.searchParams.set("hadithNumber", hadithNumber)
            url.searchParams.set("page",page)
            url.searchParams.set("paginate",paginate)

        const response = await fetch(url.toString(), {
            headers: { "Content-Type": "application/json" },
            next: { revalidate: 3600 } 
        })
        
        if (!response.ok) {
            const errorText = await response.text();
            console.error(`Upstream API failed with status ${response.status}:`, errorText)
            return NextResponse.json({ message: "Upstream standard error" }, { status: response.status })
        }

        const json: THadithApiResponse = await response.json()
        
        return NextResponse.json(json)
       
    } catch (error) {
        console.error("Critical Failure inside API route catch block:", error)
        return NextResponse.json({ message: "Internal server processing failure" }, { status: 500 })
    }
}