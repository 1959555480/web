/*
 * @lc app=leetcode.cn id=908 lang=javascript
 *
 * [908] 最小差值 I
 */

// @lc code=start
/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
var smallestRangeI = function (A, K) {
  // max + k - ( min - k )  => max-min-2k
  return Math.max(0,Math.max(...A) - Math.min(...A) - 2 * K)  
};
console.log("s", smallestRangeI([1,3,6], 3))
// @lc code=end

