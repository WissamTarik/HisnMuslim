import { THadithItem } from "@/types/hadith.types"
import { handleGetHadithByNumberModal } from "@/utils/hadith-utils"
import { useParams, useRouter } from "next/navigation"
import { useEffect, useState } from "react"

export default function useModal() {
    const router = useRouter()
    const params = useParams()
    const id = params?.id as string
    const book = params?.book as string

    const [open, setOpen] = useState(true)
    const [hadith, setHadith] = useState<THadithItem | null>(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        async function handleFetch() {
            await handleGetHadithByNumberModal(id, book, setLoading, setHadith)
        }
        handleFetch()
    }, [id, book])

    const handleOpenChange = (isOpen: boolean) => {
        setOpen(isOpen)
        if (!isOpen) {
            router.back()
        }
    }

    const formattedFullText = hadith
        ? `【 ${hadith.book?.bookName} - رقم: ${hadith.hadithNumber} 】\n\n${hadith.hadithArabic}\n\nدرجة الصحة: ${hadith.status}\nالمصدر: المجلد ${hadith.volume || 1} / باب ${hadith.chapterId || ""}`
        : ""
  return {handleOpenChange,formattedFullText,open,loading,hadith}
}
