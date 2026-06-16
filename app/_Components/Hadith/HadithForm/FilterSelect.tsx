type TFilterSelectProps={
     label:string,
     defaultValue:string,
     name:string,
     options:{
        value:string,
        label:string
     }[]
}
export default function FilterSelect({label,defaultValue,name,options}:TFilterSelectProps) {
  return (
    <>
             <div className="flex flex-col gap-1.5 text-right">
                                    <label className="text-xs font-bold text-slate-600 font-serif">{label}:</label>
                                    <select 
                                        defaultValue={defaultValue} 
                                        name={name}
                                        dir="rtl"
                                        className="w-full text-right font-serif h-11 px-3 rounded-md border border-slate-300 bg-slate-50 text-slate-900 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500 outline-none transition-all cursor-pointer appearance-none"
                                    >
                                        {options.map((opt) => (
                                            <option key={opt.value} value={opt.value}>
                                                {opt.label}
                                            </option>
                                        ))}
                                    </select>
                                </div>
    </>
  )
}
