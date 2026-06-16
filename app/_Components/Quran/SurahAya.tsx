type TSurahAyaProps = {
    numberInSurah: number,
    number: number,
    text: string
}
export default function SurahAya({ numberInSurah, number, text }: TSurahAyaProps) {
    let cleanText = text

    if (numberInSurah === 1 && number !== 1)
        cleanText = text.replace("بِسْمِ ٱللَّهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ ", "").replace("بِسْمِ ٱللَّهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ", "")

    return (
        <>
            <span className="inline font-serif select-all">
                {cleanText}
                <span className="inline-flex items-center justify-center text-xs font-sans font-bold text-[#8a7251] bg-[#f2ebd9] border-2 border-[#c5a880] w-7 h-7 rounded-full mx-2 select-none align-middle shadow-xs">
                    {numberInSurah}
                </span>
            </span>
        </>
    )
}
