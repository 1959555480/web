/*
 * @lc app=leetcode.cn id=674 lang=javascript
 *
 * [674] 最长连续递增序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findLengthOfLCIS = function (nums) {
  let count = 1
  let sum = 1
  if(!nums.length) return 0
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > nums[i - 1]) {
      count++ // 当前长度
      sum = Math.max(sum,count)
    } else {
      count = 1
    }
  }
  return sum
};
// 1 2 1 1 2 3 1 1 2 3 4
// @lc code=end

