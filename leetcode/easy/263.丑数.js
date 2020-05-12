/*
 * @lc app=leetcode.cn id=263 lang=javascript
 *
 * [263] 丑数
 */

// @lc code=start
/**
 * @param {number} num
 * @return {boolean}
 */
var isUgly = function (num) {
  // 分解因数，如果可以被2 3 5整除者整除后继续
  if (num == 1) return true
  while (num) {
    if (num % 2 == 0) {
      num = num / 2
    } else if (num % 3 == 0) {
      num = num / 3
    } else if (num % 5 == 0) {
      num = num / 5
    } else {
      break
    }
    // console.log("true22")
    if (num == 1) {
      // console.log("true")
      return true
    }
  }
  return false
};

console.log(isUgly(5))
// @lc code=end

