/*
 * @lc app=leetcode.cn id=26 lang=javascript
 *
 * [26] 删除排序数组中的重复项
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  var j = 0;//数组下标
  for(let i = 1; i<nums.length; i++){
    if(nums[i]!=nums[i-1]){//遇到不同的直接把不同于前一个的数赋值给数组[j]  这样数组前面的一定都是不重复的因为不管数组剩下的数
      j++
      nums[j]=nums[i]
    }
  }
  return j+1
};
removeDuplicates([0,0,1,1,2,3])
// @lc code=end

