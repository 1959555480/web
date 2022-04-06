/*
 * @lc app=leetcode.cn id=1360 lang=typescript
 *
 * [1360] 日期之间隔几天
 */

// @lc code=start
function daysBetweenDates(date1: string, date2: string): number {
  // 获得时间戳
  let d1 = new Date(date1).getTime()
  let d2 = new Date(date2).getTime()
  return Math.abs(Math.floor((d2-d1)/24/60/60/1000))
};
daysBetweenDates('2020-01-15','2019-12-31') 
// @lc code=end

