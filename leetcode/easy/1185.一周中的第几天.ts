/*
 * @lc app=leetcode.cn id=1185 lang=typescript
 *
 * [1185] 一周中的第几天
 */

// @lc code=start
function dayOfTheWeek(day: number, month: number, year: number): string {
  let weekMap:string[] =  [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday',
  ]

  let s: string = `${year}-${month}-${day}`
  let num: number = new Date(s).getDay()-1
  if(num === -1) num = 6
  return weekMap[num]
  
};
dayOfTheWeek(18, 7, 1999)
// @lc code=end

