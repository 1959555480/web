/*
 * @lc app=leetcode.cn id=409 lang=javascript
 *
 * [409] 最长回文串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function (s) {
  //先一个放进去 找到相同剔除，说明有一对了 sum+2 不同的放进去到最后对子全都拿出来再看看有没有单，有就+1
  let temp = new Set()
  let sum = 0
  s.split('').forEach(c => {
    if (temp.has(c)) {
      temp.delete(c)
      sum += 2
    } else {
      temp.add(c)
    }
  })
  return sum + (temp.size > 0 ? 1 : 0)
};
// @lc code=end

