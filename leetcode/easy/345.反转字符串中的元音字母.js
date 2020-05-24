/*
 * @lc app=leetcode.cn id=345 lang=javascript
 *
 * [345] 反转字符串中的元音字母
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
  // 双指针
  let result
  let temp 
  let arr = ['a','e','i','o','u','A','E','I','O','U']
  let t = s.split('')
  let i = 0
  let j = t.length
  while(i<j){
    while(i<j&&arr.indexOf(t[i])== -1) i++
    while(i<j&&arr.indexOf(t[j])== -1) j--
    temp = t[i]
    t[i] = t[j]
    t[j] = temp
    i++
    j--
  }
  result = t.join('')
  return result
};
console.log(reverseVowels("hello"))
// @lc code=end

