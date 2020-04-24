/*
 * @lc app=leetcode.cn id=172 lang=javascript
 *
 * [172] 阶乘后的零
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var trailingZeroes = function(n) {
  // 阶乘后的0由 阶乘中存在多少5决定
  // 所以有多少个5就有多少个0
  let num = 0;
  while(n>0){
    num += Math.floor(n/5)
    n = Math.floor(n/5)//输入30的时候 为6 剩下的6应该继续分一个5出来
  }
  return num
  // console.log(num)
};
// trailingZeroes(30)
// @lc code=end

