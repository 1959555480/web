/*
 * @lc app=leetcode.cn id=7 lang=javascript
 *
 * [7] 整数反转
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */


var reverse = function (x) {
  let min = -1 * Math.pow(2, 31)
  let max = Math.pow(2, 31) - 1
  if(x<0){
    let stringX = String(x)
    stringX = stringX.substr(1, stringX.length)
    let arrX = stringX.split('').reverse()
    var numberX = Number('-' + arrX.join(''))
  }else{
    let stringX = String(x)
    let arrX = stringX.split('').reverse()
    var numberX = Number(arrX.join(''))
  }
  if(numberX < min || numberX > max) {
    return 0
  }else{
    return numberX
  }
};
// reverse(1534236469)
console.log(reverse(-123))
// @lc code=end

