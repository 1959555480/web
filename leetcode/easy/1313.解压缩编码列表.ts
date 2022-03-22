/*
 * @lc app=leetcode.cn id=1313 lang=typescript
 *
 * [1313] 解压缩编码列表
 */

// @lc code=start
function decompressRLElist(nums: number[]): number[] {
  let target:number[] = []
  for(let i = 0;i<nums.length-1;i++){
    if(i%2===0){

      for(let j =0;j<nums[i];j++){
        target.push(nums[i+1])
      }
    }
  }
  return target
};
console.log(decompressRLElist([1,1,2,3]))
// @lc code=end

