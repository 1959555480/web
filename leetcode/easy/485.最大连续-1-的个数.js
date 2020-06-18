/*
 * @lc app=leetcode.cn id=485 lang=javascript
 *
 * [485] 最大连续1的个数
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function (nums) {
  nums = nums.join('').split('0')
  let len = nums[0].length
  for (let i = 1; i < nums.length; i++) {
    len = Math.max(len, nums[i].length)
  }
  return len
};
findMaxConsecutiveOnes([1, 1, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, , 0, 1])
// @lc code=end

