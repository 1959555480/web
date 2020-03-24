/*
 * @lc app=leetcode.cn id=9 lang=javascript
 *
 * [9] 回文数
 */

// @lc code=start
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  if (x < 0) {
    return false
  }
  if (x < 10 && x > 0){
    return true
  }
  let newNumb = String(x).split('').reverse().join('')
  if(newNumb == x){
    return true
  }else{
    return false
  }
};
console.log(isPalindrome(121))
// @lc code=end

