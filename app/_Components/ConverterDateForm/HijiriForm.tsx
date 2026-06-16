import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { HIJRI_MONTHS_WITH_VALUES } from '@/constants/months'
import useConvertDateForm from './useConvertDateForm'
type THijiriFormProps={
    hijiriDay:string,
    hijiriMonth:string,
    hijiriYear:string,
    setHijiriDay:(day:string )=>void,
    setHijiriMonth:(month:string )=>void,
    setHijiriYear:(year:string )=>void

}
export default function HijiriForm({hijiriDay,hijiriMonth,hijiriYear,setHijiriDay,setHijiriMonth,setHijiriYear}:THijiriFormProps) {
    return (
        <>
         <div className="space-y-3">
                <label className="text-xs font-bold text-slate-600 dark:text-slate-400 block">أدخل التاريخ الهجري بدقة:</label>
                <div className="grid grid-cols-3 gap-2">
                    {/* اليوم */}
                    <div className="space-y-1">
                        <span className="text-[10px] text-muted-foreground text-center block">اليوم</span>
                        <Input type="number" min="1" max="30" value={hijiriDay} onChange={(e) => setHijiriDay(e.target.value)} className="text-center font-mono" placeholder="21" />
                    </div>
                    
                    {/* الشهر - تحويل إلى قائمة منسدلة */}
                    <div className="space-y-1">
                        <span className="text-[10px] text-muted-foreground text-center block">الشهر</span>
                        <Select value={hijiriMonth} onValueChange={(value) => setHijiriMonth(value as string)}>
                            <SelectTrigger className="w-full text-center font-medium cursor-pointer">
                                <SelectValue placeholder="اختر الشهر" />
                            </SelectTrigger>
                            <SelectContent>
                                {HIJRI_MONTHS_WITH_VALUES.map((month) => (
                                    <SelectItem className={`cursor-pointer`} key={month.value} value={month.value}>
                                        {month.name}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </div>
                    
                    {/* السنة */}
                    <div className="space-y-1">
                        <span className="text-[10px] text-muted-foreground text-center block">السنة</span>
                        <Input type="number" min="1" value={hijiriYear} onChange={(e) => setHijiriYear(e.target.value)} className="text-center font-mono" placeholder="1447" />
                    </div>
                </div>
            </div>
        </>
    )
}
