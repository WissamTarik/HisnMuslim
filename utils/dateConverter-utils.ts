export function formatConverterDate(day:string,month:string,year:string):string{
    const paddedDay=day.padStart(2,"0")
    const paddedMonth=month.padStart(2,"0")
  return `${paddedDay}-${paddedMonth}-${year}`

}