/*
 * @lc app=leetcode.cn id=1389 lang=typescript
 *
 * [1389] 按既定顺序创建目标数组
 */

// @lc code=start
function createTargetArray(nums: number[], index: number[]): number[] {
  let target:number[] = []
  for(let i = 0;i<index.length;i++){
    target.splice(index[i],0,nums[i])
  }
  console.log(target)
  return target
};
createTargetArray( [0,1,2,3,4],[0,1,2,2,1])
// @lc code=end

