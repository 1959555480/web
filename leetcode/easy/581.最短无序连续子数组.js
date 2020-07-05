/*
 * @lc app=leetcode.cn id=581 lang=javascript
 *
 * [581] 最短无序连续子数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findUnsortedSubarray = function (nums) {
  // 先复制一份排好序的数组
  let newArr = nums.slice().sort(function (a, b) {
    return a - b
  })
  // 初始化起始和终止标志
  let start = 0
  let end = 0
  // 剔除两数组元素相同的情况
  if(newArr.toString() == nums.toString()) return 0
  // 从开头遍历找起始标志
  for (let i = 0; i < newArr.length; i++) {
    if (!(newArr[i] == nums[i])) {
      start = i
      break
    }
  }
  // 从结尾遍历找终止标志
  for (let i = newArr.length; i > 0; i--) {
    if (!(newArr[i] == nums[i])) {
      end = i
      break
    }
  }
  // 因为数组是从0下标开始遍历的 eg: [2,1] 其实就是 1-0+1 = 2
  return end - start + 1
};
console.log(findUnsortedSubarray([1,2]))
// @lc code=end

