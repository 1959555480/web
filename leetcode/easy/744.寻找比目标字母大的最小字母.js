/*
 * @lc app=leetcode.cn id=744 lang=javascript
 *
 * [744] 寻找比目标字母大的最小字母
 */

// @lc code=start
/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
var nextGreatestLetter = function (letters, target) {
  // 法一
  for (let i = 0; i < letters.length; i++) {
    if(letters[i]>target) return letters[i]
  }
  return letters[0]
  // 简短
  // return target >= letters[letters.length-1] ? letters[0] : letters.find(item=>item>target)
};
console.log(nextGreatestLetter(['a','b'],'a'))
// @lc code=end

