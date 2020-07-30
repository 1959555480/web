/*
 * @lc app=leetcode.cn id=724 lang=javascript
 *
 * [724] 寻找数组的中心索引
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function (nums) {
  let sum = nums.reduce((sum, cur) => sum + cur,0)
  let leftSum = 0
  for (let i = 0; i < nums.length; i++) {
    if(leftSum == sum-nums[i]-leftSum){
      console.log(i)
      return i
    }else{
      leftSum += nums[i]
    }
  }
  return -1
};
pivotIndex([1, 7, 3, 6, 5, 6])
// @lc code=end

