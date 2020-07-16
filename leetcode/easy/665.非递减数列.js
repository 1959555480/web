/*
 * @lc app=leetcode.cn id=665 lang=javascript
 *
 * [665] 非递减数列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var checkPossibility = function(nums) {
  if (nums.length === 1) return true
  let count = 0
  if (nums[0] > nums[1]) count++
  for (let i = 1; i < nums.length - 1; i++) {
      let left = nums[i - 1]
      let right = nums[i + 1]
      if (nums[i] > nums[i + 1]) {
          count++
          if (left > right) {
              nums[i + 1] = nums[i]
          } else {
              nums[i] = left
          }
      }
  }
  return count === 1 || count === 0
};
// @lc code=end

