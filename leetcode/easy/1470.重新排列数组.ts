/*
 * @lc app=leetcode.cn id=1470 lang=typescript
 *
 * [1470] 重新排列数组
 */

// @lc code=start
function shuffle(nums: number[], n: number): number[] {
  let target: number[] = []
  let n1:number[] = nums.splice(0,n)
  for (let i = 0; i < 2*n; i++) {
    if (i % 2 === 0) {
      target.push(n1.shift()||0)
    } else {
      target.push(nums.shift()||0)
    }
  }
  console.log(target)
  return target
};
shuffle([2,5,1,3,4,7],3)
// @lc code=end

