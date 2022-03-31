/*
 * @lc app=leetcode.cn id=1346 lang=typescript
 *
 * [1346] 检查整数及其两倍数是否存在
 */

// @lc code=start
function checkIfExist(arr: number[]): boolean {
  let isR:boolean = false
  arr.forEach(item=>{
    if((arr.includes(item*2||item/2)&&item!==0)||(arr.indexOf(0)!==arr.lastIndexOf(0))){
      isR = true
    }
  })
  return isR
};
console.log(checkIfExist([-2,0,10,-19,4,6,-8]))
// @lc code=end

