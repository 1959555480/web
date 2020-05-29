/*
 * @lc app=leetcode.cn id=374 lang=javascript
 *
 * [374] 猜数字大小
 */

// @lc code=start
/** 
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	            -1 if num is lower than the guess number
 *			             1 if num is higher than the guess number
 *                       otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
var guessNumber = function (n) {
  let low = 0
  let high = n
  while (low <= high) {
    let mid = Math.ceil((low + high) / 2) //像上取整
    let res = guess(mid)
    if(res === 0){
      return mid
    }
    if(res < 0){
      high = mid - 1
    }
    if(res > 0){
      low = mid + 1
    }
  }
};
// console.log(guessNumber(10))
// @lc code=end

