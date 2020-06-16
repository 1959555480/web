/*
 * @lc app=leetcode.cn id=476 lang=javascript
 *
 * [476] 数字的补数
 */

// @lc code=start
/**
 * @param {number} num
 * @return {number}
 */
var findComplement = function(num) {
  // 补数 = 一个2进制数 与 对应位数全为1的2进制数 异或 
  let y = []
  y.length = num.toString(2).length
  y = y.fill(1).join('')
  return num^(parseInt(y,2))
};
// console.log(findComplement(5))
// @lc code=end

