/*
 * @lc app=leetcode.cn id=169 lang=javascript
 *
 * [169] 多数元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
  nums.sort(function(a,b){
    return a-b
  })
  //从小到大排序，最中间数必然是最大的，也就是中位数
  // console.log(nums[Math.floor(nums.length/2)])
  return nums[Math.floor(nums.length/2)]
};
// majorityElement([2,2,1,1,1,2,2])
// @lc code=end

