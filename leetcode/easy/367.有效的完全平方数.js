/*
 * @lc app=leetcode.cn id=367 lang=javascript
 *
 * [367] 有效的完全平方数
 */

// @lc code=start
/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
  // 法一、
  // let average = Math.floor(num/2)+1
  // while(average>0){
  //   if(average*average == num){
  //     return true
  //   }else{
  //     average--
  //   }
  // }
  // return false
  
  // 法二、二分查找
  let low = 0
  let high = parseInt(num/2)+1
  while(low<=high){
    // console.log(low,high,Math.round((low+high)/2))
    let mid = Math.round((low+high)/2)
    if(mid*mid == num){
      return true
    }
    if(mid*mid < num){
      low = mid + 1
    }
    if(mid*mid > num){
      high = mid -1
    }
  }
  return false
};
// console.log(isPerfectSquare(36))
// @lc code=end

