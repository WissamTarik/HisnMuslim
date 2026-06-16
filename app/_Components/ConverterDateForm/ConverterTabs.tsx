
import { CardHeader } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TDateConversionData } from "@/types/dataConverter.types";

type TConverterTabsProps = {
  mode: "hToG" | "gToH";
  setMode: (mode: "hToG" | "gToH") => void;
  setResult: (result: TDateConversionData|null) => void;
  setError: (error: string | null) => void;
}

export default function ConverterTabs({ mode, setMode, setError, setResult }: TConverterTabsProps) {
  return (
    <CardHeader className="p-4 pb-2">
        <Tabs 
            value={mode} 
            onValueChange={(v) => { 
                setMode(v as any); 
                setResult(null); 
                setError(null); 
            }} 
            className="w-full"
        >
            <TabsList className="grid grid-cols-2 w-full">
                <TabsTrigger value="gToH" className="text-xs cursor-pointer">ميلادي ← هجري</TabsTrigger>
                <TabsTrigger value="hToG" className="text-xs cursor-pointer">هجري ← ميلادي</TabsTrigger>
            </TabsList>
        </Tabs>
    </CardHeader>
  );
}