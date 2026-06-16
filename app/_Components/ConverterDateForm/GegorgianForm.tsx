"use client"

import { Input } from '@/components/ui/input';

type TGegorgianFormProps = {
  gregDate: string;
  setGregDate: (date: string) => void;
}

export default function GegorgianForm({ gregDate, setGregDate }: TGegorgianFormProps) {
  return (
    <div className="space-y-1.5">
        <label className="text-xs font-bold text-slate-600 dark:text-slate-400">اختر التاريخ الميلادي:</label>
        <Input 
            type="date" 
            value={gregDate} 
            onChange={(e) => setGregDate(e.target.value)} 
            className="text-right font-mono" 
        />
    </div>
  );
}