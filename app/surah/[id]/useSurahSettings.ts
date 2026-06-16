import { useParams, useRouter, useSearchParams } from "next/navigation"
import { useEffect } from "react"

export default function useSurahSettings() {
    const router = useRouter()
    const searchParams = useSearchParams()
    const params = useParams()
    const currentSize = parseInt(searchParams?.get("size") || "24")
    const currentTheme = searchParams.get("theme") || "cream"
    const updateParams = (key: string, value: string | number) => {
        const currentParamsString = searchParams ? searchParams.toString() : ""
        const urlParams = new URLSearchParams(currentParamsString)

        urlParams.set(key, value.toString())
        router.push(`?${urlParams.toString()}`, { scroll: false })
    }
    useEffect(() => {
        if (params?.id) {
            const lastRead = localStorage.getItem("lastReadSurah")
            if (lastRead !== params.id) {
                localStorage.setItem("lastReadSurah", params?.id as string)
            }
        }
    }, [params?.id]);
  return{
        currentSize,
        currentTheme,
        updateParams
  }
}
