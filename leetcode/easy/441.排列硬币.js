/*
 * @lc app=leetcode.cn id=441 lang=javascript
 *
 * [441] 排列硬币
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function (n) {
  let i = 1
  if (n == 0) return 0
  while (n > 0) {
    n = n - i
    i++  // 下一层需要的硬币数
    if (n < i) return i - 1 // 不够返回上一层的硬币数 == 层数
  }
};
// @lc code=end

