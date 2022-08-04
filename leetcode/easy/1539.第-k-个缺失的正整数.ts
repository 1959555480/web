/*
 * @lc app=leetcode.cn id=1539 lang=typescript
 *
 * [1539] 第 k 个缺失的正整数
 */

// @lc code=start
function findKthPositive(arr: number[], k: number): number {
  let target:number[] = []
  let arrI = 0
  for(let i = 0;i<arr.length+k;i++){
    if(arr[arrI]!==i+1){
      target.push(i+1)
    }else{
      arrI++
    }
  }

  return target[k-1]
};
console.log(findKthPositive([2,3,4,7,11],5))
// @lc code=end

