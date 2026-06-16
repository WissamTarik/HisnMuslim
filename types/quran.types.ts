
export type TSurahReferences={
    number:number,
    name:string,
    englishName:string
    englishNameTranslation:string
    revelationType: "Meccan" | "Medinan"
    numberOfAyahs:number
}
export type TAyahItem={
    number:number,
    text:string,
    surah:TSurahReferences,
    numberInSurah: number,
    juz: number,
    manzil: number,
    page: number,
    ruku: number,
    hizbQuarter: number,
    sajda: boolean
}
export type TSurahDetails=TSurahReferences&{
    ayahs: TAyahItem[]

}