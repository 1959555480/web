/*
 * @lc app=leetcode.cn id=1342 lang=typescript
 *
 * [1342] 将数字变成 0 的操作次数
 */

// @lc code=start
function numberOfSteps(num: number): number {
  let count:number = 0
  while(num!==0){
    if(num%2==0){
      num = num / 2
    }else{
      num = num - 1
    }
    count ++
  }
  return count
};
console.log(numberOfSteps(8))
// @lc code=end
