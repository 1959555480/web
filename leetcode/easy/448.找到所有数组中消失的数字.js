/*
 * @lc app=leetcode.cn id=448 lang=javascript
 *
 * [448] 找到所有数组中消失的数字
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function (nums) {
  let n = []
  for (let i = 1; i <= nums.length; i++){
    if(nums.indexOf(i)==-1){
      n.push(i)
    }
  }
  return n 
};
// findDisappearedNumbers([4,3,2,7,8,2,3,1])
// @lc code=end

