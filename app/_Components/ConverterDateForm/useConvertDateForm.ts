import { convertGregorianToHijiriAction, convertHijiriToGregorianAction } from "@/actions/dataConverter.actions";
import { TDateConversionData, TGeogrianData, THijiriData } from "@/types/dataConverter.types";
import { formatConverterDate } from "@/utils/dateConverter-utils";
import { useState } from "react";

export default function useConvertDateForm() {
    const [mode, setMode] = useState<"hToG" | "gToH">("gToH");
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [result, setResult] = useState<TDateConversionData | null>(null);
    const [gregDate, setGregDate] = useState(new Date().toISOString().split("T")[0]);
    const [hijiriDay, setHijiriDay] = useState("01");
    const [hijiriMonth, setHijiriMonth] = useState("07");
    const [hijiriYear, setHijiriYear] = useState("1447");
    const [copied, setCopied] = useState(false);
    async function handleCopy(hijri: THijiriData, gregorian: TGeogrianData) {
        const textToCopy = `${hijri.day} ${hijri.month.ar} ${hijri.year} هـ\nالموافق\n${gregorian.day}  ${gregorian.month.en} ${gregorian.year} `
        try {
            await navigator.clipboard.writeText(textToCopy)
            setCopied(true)
            setTimeout(() => {
                setCopied(false)
            }, 2000);
        } catch (error) {
            console.error("فشل في نسخ التاريخ: ", error)
        }
    }
    function validateInputs(): boolean {
        if (mode === "gToH") {
            if (!gregDate) {
                setError("يرجى اختيار تاريخ ميلادي صحيح أولاً.");
                return false;
            }
            const year = parseInt(gregDate.split("-")[0]);
            if (year < 1000 || year > 3000) {
                setError("يرجى إدخال سنة ميلادية منطقية بين 1000 و 3000.");
                return false;
            }
        } else {
            const day = parseInt(hijiriDay);
            const month = parseInt(hijiriMonth);
            const year = parseInt(hijiriYear);

            if (isNaN(day) || day < 1 || day > 30) {
                setError("الأيام في التاريخ الهجري يجب أن تكون بين 1 و 30 يوماً.");
                return false;
            }
            if (isNaN(month) || month < 1 || month > 12) {
                setError("أشهر السنة الهجرية يجب أن تكون بين 1 و 12 شهراً.");
                return false;
            }
            if (isNaN(year) || year < 1 || year > 2000) {
                setError("يرجى إدخال سنة هجرية منطقية (مثال: 1447).");
                return false;
            }
        }
        return true;
    }
    async function handleConvertDate() {
        setError(null)
        setResult(null)
        if (!validateInputs()) {
            return;
        };
        setIsLoading(true)
        let data: TDateConversionData | null = null;

        try {
            if (mode == "gToH") {
                let [year, month, day] = gregDate.split("-")
                const date = formatConverterDate(day, month, year)
                data = await convertGregorianToHijiriAction(date)
            } else {

                const date = formatConverterDate(hijiriDay, hijiriMonth, hijiriYear)
                data = await convertHijiriToGregorianAction(date)

            }
            if (data) {

                setResult(data)
            } else {
                setError("لم نتمكن من معالجة البيانات المستلمة، يرجى التحقق من صحة التاريخ المدخل.");
            }
        } catch (error) {
            console.error(error);

            setError("حدث خطأ أثناء الاتصال بالخادم. يرجى التحقق من اتصال الإنترنت والمحاولة مرة أخرى.");

        } finally {

            setIsLoading(false)
        }

    }
    return {
        handleConvertDate,
        mode,
        result,
        gregDate,
        error,
        isLoading,
        hijiriDay,
        hijiriMonth,
        hijiriYear,
        setMode,
        setError,
        setResult,
        setGregDate,
        setHijiriDay,
        setHijiriMonth,
        setHijiriYear,
        handleCopy,
        copied
    }
}
