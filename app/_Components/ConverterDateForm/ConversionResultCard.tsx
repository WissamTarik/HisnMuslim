"use client"

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { TDateConversionData } from '@/types/dataConverter.types';
import { Award, CalendarDays, Check, Copy } from 'lucide-react';

// 1. تعريف الـ Types للمدخلات القادمة من الأب ⭐
type TConversionResultCardProps = {
    result: TDateConversionData;
    handleCopy: (hijri: any, gregorian: any) => Promise<void>;
    copied: boolean;
}

export default function ConversionResultCard({ result, handleCopy, copied }: TConversionResultCardProps) {
    // 2. فك البيانات القادمة من الـ Props مباشرة دون استدعاء Hook خارجي ⭐
    const { hijri, gregorian } = result;

    return (
        <Card className="border-emerald-100 dark:border-emerald-950 shadow-md bg-linear-to-br from-white to-slate-50/40 dark:from-slate-900 dark:to-slate-950 overflow-hidden h-full flex flex-col justify-between">
            <div>
                <CardHeader className="bg-emerald-600/5 dark:bg-emerald-600/10 border-b border-dashed border-slate-100 dark:border-slate-800 p-4">
                    <div className="flex justify-between items-center">
                        <h3 className="text-md font-bold text-emerald-700 dark:text-emerald-400 flex items-center gap-2">
                            <CalendarDays className="h-4 w-4" /> نتيجة التحويل الحسابي
                        </h3>
                        <span className="text-xs bg-emerald-100 text-emerald-800 dark:bg-emerald-900/40 dark:text-emerald-400 font-bold px-2 py-0.5 rounded-sm">
                            يوم {hijri?.weekday?.ar || gregorian?.weekday?.ar || "الأحد"}
                        </span>
                    </div>
                </CardHeader>
                
                <CardContent className="p-5 space-y-6">
                    <div className="grid grid-cols-2 gap-4 divide-x divide-x-reverse divide-slate-200 dark:divide-slate-800 text-center">
                        <div className="space-y-1">
                            <p className="text-xs text-slate-400 font-medium">التاريخ الهجري</p>
                            <h3 className="text-3xl font-black text-emerald-600 font-mono">{hijri?.day}</h3>
                            <p className="text-sm font-bold text-slate-800 dark:text-slate-200">{hijri?.month?.ar}</p>
                            <p className="text-xs text-muted-foreground font-mono">{hijri?.year} هـ</p>
                        </div>

                        <div className="space-y-1">
                            <p className="text-xs text-slate-400 font-medium">التاريخ الميلادي</p>
                            <h3 className="text-3xl font-black text-slate-800 dark:text-slate-200 font-mono">{gregorian?.day}</h3>
                            <p className="text-sm font-bold text-slate-800 dark:text-slate-200">{gregorian?.month?.en}</p>
                            <p className="text-xs text-muted-foreground font-mono">{gregorian?.year} مـ</p>
                        </div>
                    </div>

                    {hijri?.holidays && hijri.holidays.length > 0 && (
                        <div className="p-3 rounded-xl bg-amber-50/60 dark:bg-amber-950/20 border border-amber-100 dark:border-amber-900/50 space-y-1">
                            <div className="flex items-center gap-1.5 text-amber-800 dark:text-amber-400 font-bold text-xs">
                                <Award className="h-4 w-4" /> مناسبات إسلامية في هذا اليوم:
                            </div>
                            <ul className="list-disc list-inside text-xs text-amber-900/90 dark:text-amber-300 mr-2 space-y-0.5">
                                {hijri.holidays.map((holiday: string, index: number) => (
                                    <li key={index} className="font-medium">{holiday}</li>
                                ))}
                            </ul>
                        </div>
                    )}
                </CardContent>
            </div>

            <div className="p-5 pt-0 mt-auto">
                <Button
                    onClick={() => handleCopy(hijri, gregorian)}
                    variant="outline"
                    className={`w-full gap-2 font-bold cursor-pointer transition-all ${
                        copied 
                        ? "bg-emerald-50 dark:bg-emerald-950/30 text-emerald-600 border-emerald-200 dark:border-emerald-800" 
                        : "border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-900"
                    }`}
                >
                    {copied ? (
                        <>
                            <Check className="h-4 w-4 text-emerald-600" />
                            تم نسخ التاريخ
                        </>
                    ) : (
                        <>
                            <Copy className="h-4 w-4" />
                            نسخ التاريخ
                        </>
                    )}
                </Button>
            </div>
        </Card>
    );
}