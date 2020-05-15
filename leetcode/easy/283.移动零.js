/*
 * @lc app=leetcode.cn id=283 lang=javascript
 *
 * [283] 移动零
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  // 双指针 i 一直走 j 遇到0就停下
  let j = 0
  if (nums.length == 1) return nums
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] != 0) {
      // 不等于0 i位置要和j位置互换
      if (j < i) {
        nums[j] = nums[i]
        nums[i] = 0
      }
      j++
    }
  }
  return nums
};
// console.log(moveZeroes([1, 0, 0, 1, 1]))
// @lc code=end

