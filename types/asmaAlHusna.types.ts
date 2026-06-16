export type TAsmaAlHusnaNames={
    name:string,
    transliteration:string,
    number:number,
    en:{
        meaning:string
    }
}
export type TAsmaAlHusnaResponse={
    code:number,
    status:string,
    data:TAsmaAlHusnaNames[]
}