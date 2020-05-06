/*
 * @lc app=leetcode.cn id=217 lang=javascript
 *
 * [217] 存在重复元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  let newNums = nums.slice()
  nums = [...new Set(nums)]
  // console.log("1",newNums.length)
  // console.log("1",nums.length)
  if (nums.length == newNums.length) {
    return false
  } else {
    return true
  }
};
// console.log(containsDuplicate([1, 2, 3, 4]))
// @lc code=end

