/*
 * @lc app=leetcode.cn id=976 lang=javascript
 *
 * [976] 三角形的最大周长
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var largestPerimeter = function(nums) {
  let scourse = nums.sort((a,b)=>b-a)
  // 
  for(let i = 0;i<=scourse.length-2;i++){
    if(scourse[i+2]+scourse[i+1]>scourse[i]){
      let target = scourse.splice(i,3)
      return target.reduce((sum,cur)=>sum+cur)
    }
  }
  return 0
};
// @lc code=end

