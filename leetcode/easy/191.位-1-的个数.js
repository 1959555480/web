/*
 * @lc app=leetcode.cn id=191 lang=javascript
 *
 * [191] 位1的个数
 */

// @lc code=start
/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function (n) {
  // 方法一
  let strN = n.toString(2)
  let count = 0
  for (let i = 0; i < strN.length; i++) {
    if (strN[i] == 1) {
      count++
    }
  }
  //方法二
  // while (n != 0) {
  //   if (n % 2 == 1) {
  //     count++
  //   }
  //   n = Math.floor(n/2)
  // }
  return count
};
// hammingWeight(11111111111111111111111111111101)
// @lc code=end

