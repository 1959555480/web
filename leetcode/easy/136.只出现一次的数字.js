/*
 * @lc app=leetcode.cn id=136 lang=javascript
 *
 * [136] 只出现一次的数字
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
  let newArr = nums.sort(function(a,b){
    return a-b
  })
  for(let i = 0; i<newArr.length; i++){
    if(newArr[i]!==nums[i-1]&&newArr[i]!==nums[i+1]){
      return newArr[i]
    }
  }
};
// singleNumber([4,1,2,1,2])
// @lc code=end

