/*
 * @lc app=leetcode.cn id=1550 lang=typescript
 *
 * [1550] 存在连续三个奇数的数组
 */

// @lc code=start
function threeConsecutiveOdds(arr: number[]): boolean {
  for(let i =1;i<arr.length-1;i++){
    if(arr[i]%2!==0 && arr[i-1]%2!==0 && arr[i+1]%2!==0 ){
      return true
    }
  }
  return false
};
console.log(threeConsecutiveOdds([1,2,34,3,4,5,7,23,12]))
// @lc code=end

