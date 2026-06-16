
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle, 
  DialogTrigger 
} from "@/components/ui/dialog"
import { TAsmaAlHusnaNames } from "@/types/asmaAlHusna.types"

type TAsmaaGridItemProps = TAsmaAlHusnaNames

export default function AsmaaGridItem({ number, name, transliteration, en }: TAsmaaGridItemProps) {
  return (
    <Dialog>
      <DialogTrigger >
        <Card className="relative overflow-hidden hover:-translate-y-1 hover:shadow-lg transition-all duration-300 border-emerald-50/60 bg-white pt-6 cursor-pointer role-button">
          <div className="absolute top-3 left-3 z-10">
            <Badge variant="secondary" className="bg-emerald-50 text-emerald-700 hover:bg-emerald-50 font-bold">
              {number}
            </Badge>
          </div>

          <CardContent className="pt-6 text-center space-y-4">
            <h2 className="text-3xl font-extrabold text-emerald-800 tracking-wide">
              {name}
            </h2>
            <div className="border-t border-emerald-50/50 pt-3" dir="ltr">
              <p className="text-sm font-semibold text-foreground">{transliteration}</p>
              <p className="text-xs text-muted-foreground italic mt-0.5">{en.meaning}</p>
            </div>
          </CardContent>
        </Card>
      </DialogTrigger>

      {/* نافذة التفاصيل الكاملة المنبثقة */}
      <DialogContent className="max-w-md rounded-2xl p-6 bg-white border-emerald-100" dir="rtl">
        <DialogHeader className="text-center space-y-3 pt-4">
          <div className="mx-auto bg-emerald-50 text-emerald-800 rounded-full w-12 h-12 flex items-center justify-center font-black text-lg shadow-sm border border-emerald-100/50">
            {number}
          </div>
          <DialogTitle className="text-4xl font-black text-emerald-900 tracking-wide text-center">
            {name}
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-4 mt-4 border-t border-emerald-50 pt-4">
          <div className="flex justify-between items-center bg-slate-50/60 p-3 rounded-xl border border-slate-100">
            <span className="text-sm font-medium text-muted-foreground">الترجمة الصوتية:</span>
            <span className="text-sm font-bold text-slate-800 font-mono tracking-wide" dir="ltr">
              {transliteration}
            </span>
          </div>

          <div className="flex justify-between items-center bg-slate-50/60 p-3 rounded-xl border border-slate-100">
            <span className="text-sm font-medium text-muted-foreground">المعنى الأساسي (EN):</span>
            <span className="text-sm font-bold text-emerald-800 italic" dir="ltr">
              {en.meaning}
            </span>
          </div>

        
        </div>
      </DialogContent>
    </Dialog>
  )
}