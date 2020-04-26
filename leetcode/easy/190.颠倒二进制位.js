/*
 * @lc app=leetcode.cn id=190 lang=javascript
 *
 * [190] 颠倒二进制位
 */

// @lc code=start
/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function(n) {
  // return parseInt((n).toString(2).padStart(32, '0').split('').reverse().join(''), 2);
  // 先转2进制
  let nTwo = n.toString(2)
  // 补到32位
  let n32 = nTwo.padStart(32,'0')
  // 转成数组 再取反
  let nArr = n32.split('').reverse()
  // 转回字符串 -> 转2进制 
  let newN = parseInt(nArr.join(''),2)
  return newN 
  // console.log(newN)
};
// reverseBits()
// @lc code=end

