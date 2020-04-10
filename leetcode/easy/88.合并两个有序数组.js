/*
 * @lc app=leetcode.cn id=88 lang=javascript
 *
 * [88] 合并两个有序数组
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  for (let i = 0; i < nums2.length; i++) {
    nums1[m+i] = nums2[i]
    // console.log("num2",nums2[i],nums1[m+i])
  }
  nums1.sort(function(a,b){
    return a-b
  })
  // console.log(nums1)
};
// let nums1 = [1, 2, 3, 0, 0, 0]
// let nums2 = [2, 5, 6]

// merge(nums1,3,nums2,3)
// @lc code=end