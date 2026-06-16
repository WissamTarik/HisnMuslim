  type THadithBook={
    id:number,
    bookName:string,
    writerName:string,
    aboutWriter:string|null,
    writerDeath:string,
    bookSlug:string,
 }

 type THadithChapter={
    id:number,
    chapterNumber:string,
    chapterEnglish:string,
    chapterUrdu:string,
    chapterArabic:string,
    bookSlug:string,
}
export type THadithItem={
    id:number,
    hadithNumber:string,
    englishNarrator:string,
    hadithEnglish:string,
    hadithUrdu:string,
    hadithArabic:string,
    headingUrdu:string,
    headingEnglish:string,
    headingArabic:string,
    chapterId:string,
    bookSlug:string,
    volume:string,
    status: "Sahih" | "Hasan" | "Da`eef",
    book:THadithBook,
    chapter:THadithChapter

}
export type THadithApiResponse={
    status:number,
    message:string,
    hadiths:{
        current_page:number,
        data:THadithItem[]
    }

}