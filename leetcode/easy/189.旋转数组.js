/*
 * @lc app=leetcode.cn id=189 lang=javascript
 *
 * [189] 旋转数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
  let len = nums.length
  k = k % len
  let newArr = []
  let j = 0
  if (k === 0){
    return nums
  }
  // k代表有多少个需要先将丢前面的
  for (let i = len - k; i < len; i++) {
    newArr[j++] = nums[i]
  }
  // 剩下的push进去
  for (let a = 0; a < len - k; a++) {
    newArr[j++] = nums[a]
  }
  // 返回原数组
  for (let z = 0; z < len; z++) {
    nums[z] = newArr[z]
  }
  return nums
  // return newArr
  // console.log("newArr", nums)
};
// rotate([1,2,3,4,5,6,7], 3)
// @lc code=end

