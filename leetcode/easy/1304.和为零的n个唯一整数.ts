/*
 * @lc app=leetcode.cn id=1304 lang=typescript
 *
 * [1304] 和为零的N个唯一整数
 */

// @lc code=start
function sumZero(n: number): number[] {
  let target:number[] = []
  if(n%2===0){
    for(let i = 0 ;i<n/2;i++){
      target.push(i+1)
      target.push(-(i+1))
    }
  }else{
    for(let i = 0 ;i<Math.floor(n/2);i++){
      target.push(i+1)
      target.push(-(i+1))
    }
    target.push(0)
  }
  return target
};
sumZero(4)
// @lc code=end

