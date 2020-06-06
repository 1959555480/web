/*
 * @lc app=leetcode.cn id=415 lang=javascript
 *
 * [415] 字符串相加
 */

// @lc code=start
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function (num1, num2) {
  //  最后一位加加加
  let sum = 0
  let str = ''
  let x = num1.length - 1 // x位数 
  let y = num2.length - 1 // y位数
  let flag = 0 // 是否需要进位
  while (x >= 0 || y >= 0 || flag) {
    let x1 = Number(num1[x]) || 0
    let y1 = Number(num2[y]) || 0
    sum = x1 + y1 + flag
    x--
    y--
    if (sum >= 10) {
      flag = 1
      sum = sum - 10
    } else {
      flag = 0
    }
    str = sum + str
  }
  return str
};
// addStrings('987', '123')
// @lc code=end

