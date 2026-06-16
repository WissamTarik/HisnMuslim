"use client"

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Loader2 } from "lucide-react";
import { Empty, Loading } from ".." 
import ConverterTabs from "./ConverterTabs";
import GegorgianForm from "./GegorgianForm";
import HijiriForm from "./HijiriForm";
import ConversionResultCard from "./ConversionResultCard";
import useConvertDateForm from "./useConvertDateForm";

export default function ConverterDateForm() {
    const {
      handleConvertDate,
      mode,
      result,
      setMode,
      setResult,
 gregDate,
 setGregDate,
      error,
      setError,
      isLoading,
      handleCopy,
      copied,
      hijiriDay,
      hijiriMonth,
      hijiriYear,
      setHijiriDay,
      setHijiriMonth,
      setHijiriYear
    } = useConvertDateForm()

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-5 gap-6 items-start w-full">
            
            <Card className="md:col-span-2 border-slate-200 dark:border-slate-800 shadow-sm bg-white dark:bg-slate-900">
<ConverterTabs mode={mode} setMode={setMode} setResult={setResult} setError={setError} />                <CardContent className="p-4 space-y-4">
                    {mode === "gToH" ? (
                      <GegorgianForm gregDate={gregDate} setGregDate={setGregDate} />
                    ) : (
                      <HijiriForm 
                        hijiriDay={hijiriDay} 
                        hijiriMonth={hijiriMonth} 
                        hijiriYear={hijiriYear} 
                        setHijiriDay={setHijiriDay} 
                        setHijiriMonth={setHijiriMonth} 
                        setHijiriYear={setHijiriYear} 
                      />
                    )}

                    <Button 
                        onClick={handleConvertDate} 
                        className="w-full bg-emerald-600 cursor-pointer hover:bg-emerald-700 text-white font-bold gap-2 transition-colors"
                        disabled={isLoading}
                    >
                        {isLoading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Calendar className="h-4 w-4" />}
                        تحويل الآن
                    </Button>
                </CardContent>
            </Card>

            <div className="md:col-span-3 h-full">
                {isLoading ? (
                    <div className="border border-slate-200 dark:border-slate-800 rounded-xl bg-white dark:bg-slate-900 p-6 h-full min-h-56.25 flex items-center justify-center">
                        <Loading 
                            variant="text" 
                            count={2} 
                            message="جاري احتساب الفوارق الفلكية وتحويل التاريخ دقيقة بدقة..." 
                            className="py-2"
                        />
                    </div>
                ) : error ? (
                    <Empty 
                        title="تعذر التحويل"
                        description={error}
                    />
                ) : result ? (
                    <ConversionResultCard result={result} 
                               handleCopy={handleCopy} 
                             copied={copied}/>
                ) : (
                    <div className="border border-dashed border-slate-200 dark:border-slate-800 rounded-xl h-full min-h-56.25 flex flex-col items-center justify-center p-6 text-center text-muted-foreground bg-slate-50/50 dark:bg-slate-900/30">
                        <Calendar className="h-8 w-8 text-slate-300 dark:text-slate-700 mb-2" />
                        <p className="text-sm font-medium">يرجى إدخال أو اختيار التاريخ ثم الضغط على زر "تحويل الآن"</p>
                        <p className="text-xs opacity-70 mt-1">ستظهر المقارنة التفصيلية الحسابية واللوحة هنا.</p>
                    </div>
                )}
            </div>

        </div>
    </>
  )
}