/*
 * @lc app=leetcode.cn id=633 lang=javascript
 *
 * [633] 平方数之和
 */

// @lc code=start
/**
 * @param {number} c
 * @return {boolean}
 */
var judgeSquareSum = function (c) {
  if (c == 0) return true
  let big = Math.ceil(Math.sqrt(c)) //
  for (let i = 1; i <= big; i++) {
    // 原数减去当前数的平方再开方是否为整数
    if (Math.sqrt(c - i * i) % 1 == 0) {
      return true
    }
  }
  return false
};
// judgeSquareSum(3)
// @lc code=end

