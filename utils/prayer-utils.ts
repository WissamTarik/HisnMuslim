export function getRemainingTime(time:string){
  const dateNow=new Date()
  const [hours,minutes]=time.split(":").map(Number)
  const prayerDate=new Date()
  prayerDate.setHours(hours,minutes,0,0)
  const diff=prayerDate.getTime()-dateNow.getTime()
  const totalDiff=Math.floor(diff/1000/60)
  const hour=Math.floor(totalDiff/60)
  const min=totalDiff%60
  return `${hour}س ${min}د`

}
export function cleanTimeStr(time: string){
 return time.split(" ")[0];
}