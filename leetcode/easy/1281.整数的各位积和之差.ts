/*
 * @lc app=leetcode.cn id=1281 lang=typescript
 *
 * [1281] 整数的各位积和之差
 */

// @lc code=start
function subtractProductAndSum(n: number): number {
let str:string = String(n)
let sum:number = str.split('').reduce((sum,cur)=>{
  return sum + Number(cur)
},0)
let mul:number = str.split('').reduce((sum,cur)=>{
  return sum * Number(cur)
},1)
return mul - sum
};
console.log(subtractProductAndSum(234))
// @lc code=end

