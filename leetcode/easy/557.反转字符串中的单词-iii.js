/*
 * @lc app=leetcode.cn id=557 lang=javascript
 *
 * [557] 反转字符串中的单词 III
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  let sArr = s.split(' ')
  console.log(sArr)
  for (let i = 0; i < sArr.length; i++) {
    sArr[i] = sArr[i].split('').reverse().join('')
  }

  return sArr.join(" ")
};
// console.log(reverseWords("Let's take LeetCode contest"))
// @lc code=end

