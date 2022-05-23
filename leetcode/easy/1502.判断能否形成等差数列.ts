/*
 * @lc app=leetcode.cn id=1502 lang=typescript
 *
 * [1502] 判断能否形成等差数列
 */

// @lc code=start
function canMakeArithmeticProgression(arr: number[]): boolean {
  arr.sort((a,b)=>a-b)
  let c: number  = arr[1]- arr[0]
  for(let i = 1;i<arr.length;i++){
    let cha = arr[i]-arr[i-1]
    if(cha!=c){
      return false
    }
  }
  return true
};
console.log(canMakeArithmeticProgression([-68,-96,-12,-40,16]))
// @lc code=end

