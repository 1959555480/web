/*
 * @lc app=leetcode.cn id=258 lang=javascript
 *
 * [258] 各位相加
 */

// @lc code=start
/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function (num) {
  let numStr = num + ''
  // 递归
  let newStr = 0
  for (let i = 0; i < numStr.length; i++) {
    newStr += Number(numStr[i])
  }

  // if (newStr < 10) {
  //   return newStr
  // } else {
  //   return addDigits(newStr)
  // }
  return newStr < 10 ? newStr : addDigits(newStr)
};
// console.log(addDigits(38))
// @lc code=end

