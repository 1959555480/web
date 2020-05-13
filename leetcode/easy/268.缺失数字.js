/*
 * @lc app=leetcode.cn id=268 lang=javascript
 *
 * [268] 缺失数字
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
  let lackNum = 1
  let flag = false
  nums.forEach((item, index) => {
    if (!nums.includes(index)) {
      // 不存在这个位置对应的数 返回
      flag = true //如果是没缺少过的 就返回数组长度的数字
      lackNum = index
      return
    }
  })
  return flag ? lackNum : nums.length
  /* 方法二 使用数学公式 
  * 遍历所有的数字，相加操作，计算前n项和
  * 前n项和减去遍历和，差值即为缺失的数字
  */
};
// console.log(missingNumber([3, 0, 1]))
// @lc code=end

