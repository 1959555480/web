/*
 * @lc app=leetcode.cn id=326 lang=javascript
 *
 * [326] 3的幂
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function (n) {
  if (n == 1) return true
  while (n >= 3) {
    n = n / 3
    if (n == 1) return true
  }
  return false
};
console.log(isPowerOfThree(1))
// @lc code=end

