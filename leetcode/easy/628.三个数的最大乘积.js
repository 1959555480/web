/*
 * @lc app=leetcode.cn id=628 lang=javascript
 *
 * [628] 三个数的最大乘积
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumProduct = function (nums) {
  let arr = nums.sort(function (a, b) { return b - a })
  return arr[0] * (Math.max(arr[1] * arr[2], arr[arr.length - 1] * arr[arr.length - 2]))
};
maximumProduct([-4, -3, -2, -1, 60])
// @lc code=end

