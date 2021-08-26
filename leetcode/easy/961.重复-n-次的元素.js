/*
 * @lc app=leetcode.cn id=961 lang=javascript
 *
 * [961] 重复 N 次的元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var repeatedNTimes = function (nums) {
  nums.sort((a, b) => a - b)
  let length = nums.length/2
  if(nums[length]===nums[length+1]){ //数字比如出现在中位数 偶数有两个 需要判断
    return nums[length]
  }else{
    return nums[length-1]
  }
}
console.log(repeatedNTimes([9,5,3,3]))
// @lc code=end

