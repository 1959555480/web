/*
 * @lc app=leetcode.cn id=69 lang=javascript
 *
 * [69] x 的平方根
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
  for (let i = 0; i <= x; i++) {
    if (Math.pow(i, 2) < x) {
    } else if (Math.pow(i, 2) == x) {
      return Math.floor(i)
    } else {
      return Math.floor(i - 1)
    }
  }
};
console.log(mySqrt(8))
// @lc code=end

