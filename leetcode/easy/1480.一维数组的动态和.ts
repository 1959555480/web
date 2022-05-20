/*
 * @lc app=leetcode.cn id=1480 lang=typescript
 *
 * [1480] 一维数组的动态和
 */

// @lc code=start
function runningSum(nums: number[]): number[] {
  return nums.reduce((sum,cur,index)=>{
    sum.push(cur+(sum[index-1]||0))
    return sum
  },<number[]>[])
};
console.log(runningSum([1,2,3,4]))
// @lc code=end

