/*
 * @lc app=leetcode.cn id=561 lang=javascript
 *
 * [561] 数组拆分 I
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function(nums) {
  let sortNum = nums.sort(function(a,b){
    return a-b
  })
  let sum = 0
  for(let i = 0; i<sortNum.length;i+=2){
    console.log(i)
    sum += nums[i]
  }
  return sum
};
// @lc code=end

