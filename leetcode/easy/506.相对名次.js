/*
 * @lc app=leetcode.cn id=506 lang=javascript
 *
 * [506] 相对名次
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {string[]}
 */
var findRelativeRanks = function (nums) {
  let arr = []
  arr = nums.slice().sort((a, b) => { return b - a }) //大到小排列 成绩排名
  // arr 的顺序就是名次
  for (let i = 0; i < arr.length; i++) {
    let index = nums.indexOf(arr[i])
    if (i == 0) { //第一名
      nums[index] = 'Gold Medal'
    } else if (i == 1) { //第二名
      nums[index] = 'Silver Medal'
    } else if (i == 2) { //第三名
      nums[index] = 'Bronze Medal'
    } else {
      nums[index] = i + 1 + ''
    }
  }
  return nums
};
// @lc code=end

