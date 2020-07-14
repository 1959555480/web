/*
 * @lc app=leetcode.cn id=645 lang=javascript
 *
 * [645] 错误的集合
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function (nums) {
  // 法一写法  筛选重复 数组排序 查找缺失 (空间复杂度O(3n))
  // 找出重复项
  // let c = nums.filter(item => {
  //   return nums.indexOf(item) != nums.lastIndexOf(item)
  // })
  // // 排序
  // nums.sort(function (a, b) {
  //   return a - b
  // })
  // // 根据index 查找应该有却没有出现的index
  // nums.forEach((item, index) => {
  //   if (nums.indexOf(index + 1)==-1) {
  //     c[1] = index + 1
  //     return
  //   }
  // })
  // return c
  // 法二 
  let num1, num2
  nums.some((item, index) => {
    // 找到重复项
    if (nums.indexOf(item) != nums.lastIndexOf(item)) {
      num1 = item
    }
    // 缺失
    if (nums.indexOf(index + 1) == -1) {
      num2 = index + 1
    }
    // 找到符合退出循环
    if (num1 && num2) return true
  })
  return [num1, num2]
};
// @lc code=end

