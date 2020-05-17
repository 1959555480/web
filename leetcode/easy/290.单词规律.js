/*
 * @lc app=leetcode.cn id=290 lang=javascript
 *
 * [290] 单词规律
 */

// @lc code=start
/**
 * @param {string} pattern
 * @param {string} str
 * @return {boolean}
 */
var wordPattern = function (pattern, str) {
  let arrRule = pattern.split('')
  let arr = str.split(' ')
  for (let i = 0; i < str.length; i++) {
    if (arr.indexOf(arr[i]) != arrRule.indexOf(arrRule[i])) {
      return false
    }
  }
  return true
  // console.log("数组", arrRule, arr)
};
// console.log(wordPattern('abba', "dog cat cat dog"))
// @lc code=end

