/*
 * @lc app=leetcode.cn id=292 lang=javascript
 *
 * [292] Nim 游戏
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
var canWinNim = function (n) {
  // 由 4个的时候先手怎么拿都是输 8个同理 只要留给对面4个，不管怎么拿，面对4个的人必输
  // 所以只要给定石头必须不能是4的倍数才会赢
  return Boolean(n % 4 != 0)
};
// console.log(canWinNim(8))
// @lc code=end

