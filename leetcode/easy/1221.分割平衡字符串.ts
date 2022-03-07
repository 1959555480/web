/*
 * @lc app=leetcode.cn id=1221 lang=typescript
 *
 * [1221] 分割平衡字符串
 */

// @lc code=start
function balancedStringSplit(s: string): number {
  // 动态分布
  let sum: number = 0
  let left: number = 0
  let right: number = 0
  for (let i = 0; i < s.length; i++) {
    if (s[i] === 'L') {
      left++
    } else {
      right++
    }
    if ((left === right) && (left !== 0)) {
      sum++
    }
  }
  console.log("s",left,right,sum)
  return sum
};
balancedStringSplit('RLLLLRRRLR')
// @lc code=end

