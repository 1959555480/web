/*
 * @lc app=leetcode.cn id=167 lang=javascript
 *
 * [167] 两数之和 II - 输入有序数组
 */

// @lc code=start
/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
  for (let i = 0; i < numbers.length; i++){
    let first = target - numbers[i]
    let last = numbers.lastIndexOf(first)
    if(last>i){
      // console.log("存在",i,last)
      return [i+1,last+1]
    }
    // console.log("存在",i,last)
  }
};
twoSum([0, 0, 3, 4],0)
// @lc code=end

