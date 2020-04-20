/*
 * @lc app=leetcode.cn id=168 lang=javascript
 *
 * [168] Excel表列名称
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string}
 */
var convertToTitle = function(n) {
  // let num = String.fromCharCode(n+64)
  let str = ''
  if(n==0){
    return ''
  }else{
    while(n!==0){
      n = n-1//26进制
      temp = n%26//余数
      n = Math.floor(n/26)//整数
      str = String.fromCharCode(temp+65) +str
    }
    return str
  }
  
};
// convertToTitle(701)
// @lc code=end

