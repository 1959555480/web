/*
 * @lc app=leetcode.cn id=455 lang=javascript
 *
 * [455] 分发饼干
 */

// @lc code=start
/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function (g, s) {
  // 双指针
  let gIndex = 0
  let sIndex = 0
  let sum = 0
  g.sort((a, b) => {
    return a - b
  })
  s.sort((a, b) => {
    return a - b
  })
  while (gIndex < g.length && sIndex < s.length) { //因为已经进行排序，一旦g中不满足，后面必然也不会有满足的
    if (g[gIndex] <= s[sIndex]) {
      gIndex++
      sum++
    }
    // 合不合适s都要向后走
    sIndex++
  }
  return sum
};
console.log(findContentChildren([1, 2, 3], [3]))
// @lc code=end

// [1,200,3,4,5]
// [2,30,4,5,40]