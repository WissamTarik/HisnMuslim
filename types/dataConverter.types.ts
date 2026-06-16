 type TWeekday={
    en:string,
    ar?:string
 }

 type TGregogrianMonth={
    number:number,
    en:string
 }
 type THijiriMonth=TGregogrianMonth&{
    ar:string,
    days:number
 }
 type TCommonData={
    date:string,
    format:string,
    day:string,
    weekday:TWeekday,
        year:string


 }
 export type THijiriData=TCommonData&{
    month:THijiriMonth,
    adjustedHolidays:string[],
    holidays:string[],
    method:string
 }
 export type TGeogrianData=TCommonData&{
    month:TGregogrianMonth,
    lunarSighting:boolean
 }
 export type TDateConversionData={
    hijri:THijiriData,
    gregorian:TGeogrianData
 }
 export type TDateConverterApiResponse={
    status:string,
    code:number,
    data:TDateConversionData
 }