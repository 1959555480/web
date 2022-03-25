/*
 * @lc app=leetcode.cn id=1323 lang=typescript
 *
 * [1323] 6 和 9 组成的最大数字
 */

// @lc code=start
function maximum69Number (num: number): number {
  return Number(String(num).replace('6','9'))
};
console.log(maximum69Number(9999))
// @lc code=end

