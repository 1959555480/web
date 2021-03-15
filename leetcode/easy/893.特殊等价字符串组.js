/*
 * @lc app=leetcode.cn id=893 lang=javascript
 *
 * [893] 特殊等价字符串组
 */

// @lc code=start
/**
 * @param {string[]} A
 * @return {number}
 */
var numSpecialEquivGroups = function (A) {
  let list = A.map(item => {
    let arr = item.split('')
    let odd = arr.filter((t, i) => i % 2 === 1).sort().join('')
    let event = arr.filter((t, i) => i % 2 === 0).sort().join('')
    return event + odd
  })
  return [...new Set(list)].length
};
// @lc code=end

