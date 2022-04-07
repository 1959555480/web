/*
 * @lc app=leetcode.cn id=1365 lang=typescript
 *
 * [1365] 有多少小于当前数字的数字
 */

// @lc code=start
function smallerNumbersThanCurrent(nums: number[]): number[] {
  return nums.slice(0).sort((a,b)=>a-b).reduce((sum:number[],cur:number,index:number,arr:number[])=>{
    let target = nums[index]
    // 所在位置
    sum.push(arr.indexOf(target))
    return sum
  },[])
};
// console.log(smallerNumbersThanCurrent([6,5,4,8]))
// @lc code=end

