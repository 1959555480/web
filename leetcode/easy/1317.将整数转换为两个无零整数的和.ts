/*
 * @lc app=leetcode.cn id=1317 lang=typescript
 *
 * [1317] 将整数转换为两个无零整数的和
 */

// @lc code=start
function getNoZeroIntegers(n: number): number[] {
  let a = Math.floor((Math.random()*(n-1))+1)
  let b:number = n-a
  while((String(a).indexOf('0')!==-1)||(String(b).indexOf('0')!==-1)){
    a = Math.floor((Math.random()*(n-1))+1)
    b = n-a
  }

  return [a,b]
};
console.log(getNoZeroIntegers(10000))
// @lc code=end

