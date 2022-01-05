/*
 * @lc app=leetcode.cn id=1009 lang=javascript
 *
 * [1009] 十进制整数的反码
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var bitwiseComplement = function(n) {
  // 转二进制 取反
  let twoN = n.toString(2).split('').map(item=>{
    if(item === '0'){
      return '1'
    }else {
      return '0'
    }
  })
  return parseInt(twoN.join(''),2)
  
};
console.log(bitwiseComplement(310350))
// @lc code=end

