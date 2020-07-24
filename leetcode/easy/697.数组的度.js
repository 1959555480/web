/*
 * @lc app=leetcode.cn id=697 lang=javascript
 *
 * [697] 数组的度
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findShortestSubArray = function (nums) {
  let degree, lens = []
  const m = new Map()
  for (let val of nums) {
    m.set(val, m.has(val) ? m.get(val) + 1 : 1)
  }
  degree = Math.max(...m.values())
  for (let key of m.keys()) {
    console.log(key,m.get(key))
    if (m.get(key) === degree) {
      lens.push(nums.lastIndexOf(key) - nums.indexOf(key) + 1)
    }
  }
  console.log(lens)
};
findShortestSubArray([1, 2, 2, 3, 1])
// @lc code=end

