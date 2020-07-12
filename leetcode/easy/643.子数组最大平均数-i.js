/*
 * @lc app=leetcode.cn id=643 lang=javascript
 *
 * [643] 子数组最大平均数 I
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function (nums, k) {
  // 暴力破解 从前往后遍历前k个找出最大
  // if (k == 1){
  //   return Math.max(...nums)
  // }
  // let finSum = Number.MIN_SAFE_INTEGER;
  // for (let i = 0; i <= nums.length - k; i++) {
  //   let curSum = 0
  //   for (let j = i; j < k + i; j++) {
  //     curSum += nums[j]
  //   }
  //   finSum = Math.max(finSum, curSum)
  // }
  // return finSum / k
  // 维护一个滑动窗口
  let finSum = 0
  let curSum = 0
  // 窗口创立
  for (let i = 0; i < k; i++) {
    curSum += nums[i]
  }
  finSum = curSum
  // 滑动 加上窗口后一个 减去窗口第一个
  for (let j = k; j < nums.length; j++) {
    curSum = curSum + nums[j] - nums[j-k]
    finSum = Math.max(curSum,finSum)
  }
  return finSum / k
};
// console.log(findMaxAverage([1,12,-5,-6,50,3], 4))
// @lc code=end

