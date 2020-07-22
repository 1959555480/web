/*
 * @lc app=leetcode.cn id=693 lang=javascript
 *
 * [693] 交替位二进制数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
var hasAlternatingBits = function (n) {
  let nArr = n.toString(2)
  for (let i = 1; i < nArr.length; i++) {
    if (nArr[i] != nArr[i - 1]) {
      console.log(nArr[i])
    } else {
      return false
    }
  }
  return true
};
console.log(hasAlternatingBits(1))
// @lc code=end

