import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
type TAzkarCardProps={
    id:number,
    zekr:string,
    repeat:number,
    bless?:string

}
export default function AzkarCard({zekr,repeat,bless}:TAzkarCardProps) {
  return (
    <>
              <Card 
            className="bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800"
          >
            <CardContent className="p-6">
              <p className="text-right text-lg md:text-xl font-medium leading-loose text-slate-800 dark:text-slate-100 mb-4">
                {zekr}
              </p>
            {bless && (
                  <div className="mb-4 p-3 bg-slate-50 dark:bg-slate-800/50 border-r-4 border-slate-400 dark:border-slate-600 rounded-l-md">
                    <p className="text-sm md:text-base text-slate-600 dark:text-slate-400 font-normal leading-relaxed">
                      <span className="font-bold text-slate-700 dark:text-slate-300 ml-1">الفضل:</span>
                      {bless}
                    </p>
                  </div>
                )}
              <div className="flex items-center justify-between mt-2 pt-2 border-t border-slate-100 dark:border-slate-800/60">
                <div>
                  <Badge variant="secondary" className="text-slate-600 dark:text-slate-300">
                    عدد المرات المطلوبة
                  </Badge>
                </div>
                
                <div className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-base bg-slate-100 text-slate-800 dark:bg-slate-800 dark:text-slate-200">
                  {repeat}
                </div>
              </div>
            </CardContent>
          </Card>
    </>
      
  )
}
