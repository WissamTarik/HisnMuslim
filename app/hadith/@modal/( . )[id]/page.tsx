"use client"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { BookOpen } from "lucide-react"
import useModal from "./useModal"
import { Empty, HadithModalCardContent } from "@/app/_Components"
import HadithLoading from "./HadithLoading"

export default function HadithModal() {
  const { handleOpenChange, formattedFullText, open, loading, hadith } = useModal()

    return (
        <Dialog open={open} onOpenChange={handleOpenChange}>
            <DialogContent 
                dir="rtl" 
                className="max-w-2xl w-[95vw] max-h-[85vh] overflow-y-auto font-serif text-right rounded-2xl p-0 gap-0 border border-slate-100 shadow-2xl bg-white"
            >
                <DialogHeader className="bg-slate-50 px-6 py-4 border-b border-slate-200 sticky top-0 z-10 flex flex-row items-center justify-between space-y-0 text-right">
                    <DialogTitle className="flex items-center gap-3 text-slate-900 text-xl font-bold font-serif">
                        <BookOpen className="h-5 w-5 text-emerald-600" />
                        <span>بطاقة توثيق الحديث الشريف</span>
                    </DialogTitle>
                </DialogHeader>
                
                {loading ? (
                 <HadithLoading/>
                ) : hadith ? (
                    <HadithModalCardContent {...hadith} formattedText={formattedFullText}/>
                ) : (
                    <Empty description="عذراً، لم يتم العثور على بيانات الحديث المطلوبة."/>
                )}
            </DialogContent>
        </Dialog>
    )
}