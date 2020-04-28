/*
 * @lc app=leetcode.cn id=198 lang=javascript
 *
 * [198] 打家劫舍
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  let l = nums.length
  if (l == 0) {
    return 0
  } else if (l == 1) {
    return nums[0]
  } else if (l == 2) {
    return Math.max(nums[0], nums[1])
  }

  let temp = [nums[0], Math.max(nums[0], nums[1])]
  for (let i = 2; i < l; i++) {
    temp[i] = Math.max(temp[i - 1], nums[i] + temp[i - 2])
  }
  // console.log(temp)
  return temp[l - 1]
};
// rob([1,2,3,1])
// @lc code=end

