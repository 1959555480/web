/*
 * @lc app=leetcode.cn id=53 lang=javascript
 *
 * [53] 最大子序和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  let result = nums[0]
  let sum = nums[0] >= 0 ? 0 : nums[0]
  for (let i = 0; i < nums.length; i++) {
    sum = nums[i] > nums[i] + sum ? nums[i] : nums[i] + sum
    result = sum > result ? sum : result
  }
  console.log(result)
  return result
};
maxSubArray([4, -1, -2,3])
// @lc code=end
                                                     
                