/*
 * @lc app=leetcode.cn id=796 lang=javascript
 *
 * [796] 旋转字符串
 */

// @lc code=start
/**
 * @param {string} A
 * @param {string} B
 * @return {boolean}
 */
var rotateString = function (A, B) {
  if (A.length !== B.length) return false
  if (A===B) return true
  // 法一 暴力穷举
  // for (let i = 0; i < A.length; i++) {
  //   A = A.substring(1) + A.substr(0, 1)
  //   if (A === B) return true
  // }
  // return false
  // 法二 
  return (A+A).includes(B)
};
console.log(rotateString('abcde','cdeab'))
// @lc code=end

