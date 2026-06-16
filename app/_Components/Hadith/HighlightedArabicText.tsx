

  export  function HighlightedArabicText({ text, term }: { text: string; term: string }) {
    if (!term.trim()) return <>{text}</>

    const escapedTerm = term.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&")
    const regex = new RegExp(`(${escapedTerm})`, "gi")
    const segments = text.split(regex)

    return (
        <>
            {segments.map((segment, index) => 
                regex.test(segment) ? (
                    <mark key={index} className="bg-amber-200 text-slate-950 font-bold px-0.5 rounded-xs transition-all">
                        {segment}
                    </mark>
                ) : (
                    <span key={index}>{segment}</span>
                )
            )}
        </>
  )
}