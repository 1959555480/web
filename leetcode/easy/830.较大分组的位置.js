/*
 * @lc app=leetcode.cn id=830 lang=javascript
 *
 * [830] 较大分组的位置
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number[][]}
 */
var largeGroupPositions = function (s) {
  let arr = []
  let number = 1
  for (let i = 0; i < s.length; i++) {
    if (s[i] === s[i + 1]) {
      number++
      console.log("i", s.length, i, number)
    } else {
      if (number >= 3) {
        arr.push([i - number + 1, i])
      }
      number = 1
    }
  }
  return arr
};
largeGroupPositions("abbxxxxzzy")
// @lc code=end

