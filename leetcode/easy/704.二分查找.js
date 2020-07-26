/*
 * @lc app=leetcode.cn id=704 lang=javascript
 *
 * [704] 二分查找
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let left = 0
  let right = nums.length -1 
  while (left <= right) {
    let average = Math.ceil((left + right) / 2)
    if (target > nums[average]) { // 目标值比得到的值大 在右侧
      left = average + 1
    } else if (target < nums[average]) {// 目标值比得到的值小 在左侧
      right = average - 1
    }else{
      return average
    }
  }
  return -1
};
console.log(search([-1, 0, 3, 5, 9, 12], 13))
// @lc code=end
// left  right mid 
/**
 * 0  6  3   2<5
 * 0  2  1   2>0
 * 2  2  2   2<3
 */

