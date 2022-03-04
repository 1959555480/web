/*
 * @lc app=leetcode.cn id=1207 lang=typescript
 *
 * [1207] 独一无二的出现次数
 */

// @lc code=start
function uniqueOccurrences(arr: number[]): boolean {
  let arrMap = new Map<number, number>()

  for (let value of arr) {
    let target: any = arrMap.get(value)
    if (target) {
      arrMap.set(value, target + 1)
    } else {
      arrMap.set(value, 1)
    }
  }

  return [...arrMap.values()].length === [... new Set([...arrMap.values()])].length
};
uniqueOccurrences([-3, 0, 1, -3, 1, 1, 1, -3, 10, 0])
// @lc code=end

