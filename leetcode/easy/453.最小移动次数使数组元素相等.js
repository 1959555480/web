/*
 * @lc app=leetcode.cn id=453 lang=javascript
 *
 * [453] 最小移动次数使数组元素相等
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var minMoves = function (nums) {
  // 超时
  // let len = nums.length
  // let isOne
  // isOne = [...new Set(nums)]
  // if (isOne.length == 1) {
  //   return 0
  // }
  // for (let i = 1; ; i++) {
  //   nums.sort()
  //   for (let j = 0; j < len - 1; j++) {
  //     nums[j]++
  //   }
  //   isOne = [...new Set(nums)]
  //   if (isOne.length == 1) {
  //     return i
  //   }
  // }

  // 第二种
  // 每次操作n-1个元素加1，直到所有元素都相等 
  // == 每次操作最大值-1，直到所有元素等于最小值
  // == 求所有元素与最小值差值的和。 
  let min = Math.min.apply(null, nums)
  let path = 0
  for (let i = 0, len = nums.length; i < len; i++) {
    path += nums[i] - min;
  }
  return path
};
// console.log(minMoves([1, 2, 4]))
// @lc code=end

