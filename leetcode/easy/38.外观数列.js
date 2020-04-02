/*
 * @lc app=leetcode.cn id=38 lang=javascript
 *
 * [38] 外观数列
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function (n) {
  let start = '1'
  for (let i = 1; i < n; i++) {
    start = start.replace(/(\d)\1*/g, item => `${item.length}${item[0]}`)
    console.log('for:',start)
  }
  return start
};
console.log(countAndSay(2))
// @lc code=end


//n == 1  i == 1  start == '1'
//n == 2  i == 2  start == '11' item.length == 1 item[0] == 1 
