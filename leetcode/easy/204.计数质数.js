/*
 * @lc app=leetcode.cn id=204 lang=javascript
 *
 * [204] 计数质数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function (n) {
  // 厄拉多塞解法 每计算一个数，都要把它的倍数去掉，到了N,看留下多少个数
  let count = 0
  sign = new Array(n + 1)
  for (let i = 2; i < n; i++) {
    if (!sign[i]) {
      count++
      for (let j = i * 2; j < n; j += i) {
        sign[j] = true
        // console.log(sign)
      }
    }
  }
  // console.log("ntr", count)
  return count
};
// countPrimes(10)
// @lc code=end

//10
/**
 * 10
 * i j sign
 * 2 4 sign[4]=true
 * 2 6 sign[6]=true
 * 2 8 sign[8]=true
 * 3 6 sign[6]=true
 * 3 9 sign[9]=true
 * 4 8 sign[8]=true
 */