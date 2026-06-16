import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { format } from "date-fns"
import { ar } from "date-fns/locale"
import { CalendarIcon } from "lucide-react"
import { DateRange } from "react-day-picker"

type TCalendarRangePickerProps={
    isPopOver:boolean,
    setIsPopOver:(open:boolean)=>void,
    dateRange:DateRange|undefined,
    handleDateChange:(range:DateRange|undefined)=>void

}
export default function CalendarRangePicker({isPopOver,setIsPopOver,dateRange,handleDateChange}:TCalendarRangePickerProps) {
  return (
    <>
      
        <Popover open={isPopOver} onOpenChange={setIsPopOver}>
  
  <PopoverTrigger> 
    <span className="inline-flex items-center justify-start gap-2 rounded-md text-sm font-medium transition-colors border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 w-full md:w-75 text-right cursor-pointer shadow-xs">
      <CalendarIcon className="h-4 w-4 text-emerald-600" />
      {dateRange?.from ? (
        dateRange.to ? (
          <>
            {format(dateRange.from, "LLL dd, yyyy", { locale: ar })} - {format(dateRange.to, "LLL dd, yyyy", { locale: ar })}
          </>
        ) : format(dateRange.from, "LLL dd, yyyy", { locale: ar })
      ) : <span>اختر الفترة الزمنية</span>}
    </span>
  </PopoverTrigger>
  <PopoverContent className="w-auto p-0" align="end">
    <Calendar 
      mode="range" 
      defaultMonth={dateRange?.from} 
      selected={dateRange} 
      onSelect={handleDateChange}  
      numberOfMonths={2} 
      locale={ar} 
      disabled={(date) => date < new Date(new Date().setHours(0, 0, 0, 0))} 
    />
  </PopoverContent>
</Popover>
    </>
  )
}
