/*
 * @lc app=leetcode.cn id=1295 lang=typescript
 *
 * [1295] 统计位数为偶数的数字
 */

import { count } from "console"

// @lc code=start
function findNumbers(nums: number[]): number {
  let count:number = 0
  nums.forEach(item=>{
    if(String(item).length%2===0){
      count ++
    }
    // return 
  })
  return count
};
// @lc code=end

