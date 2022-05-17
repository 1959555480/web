/*
 * @lc app=leetcode.cn id=1464 lang=typescript
 *
 * [1464] 数组中两元素的最大乘积
 */

// @lc code=start
function maxProduct(nums: number[]): number {
  // console.log(Math.max(...nums))
  // // 找出最大两个值
  // let arr = nums.slice(0)
  // let max1 = Math.max(...arr)
  // let index1 = arr.indexOf(max1)
  // arr.splice(index1, 1)
  // let max2 = Math.max(...arr)
  // let index2 = arr.indexOf(max2)
  // arr.splice(index2, 1)
  // return (max1 - 1) * (max2 - 1)
  return (nums.sort((a,b)=>b-a)[0] -1)* (nums.sort((a,b)=>b-a)[1] -1)
};
console.log(maxProduct([3,4,5,2]))
// @lc code=end

