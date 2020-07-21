/*
 * @lc app=leetcode.cn id=686 lang=javascript
 *
 * [686] 重复叠加字符串匹配
 */

// @lc code=start
/**
 * @param {string} A
 * @param {string} B
 * @return {number}
 */
var repeatedStringMatch = function (A, B) {
  const endLen = B.length + A.length * 2;
  for (let count = 1, repeatA = A; repeatA.length <= endLen; count++, repeatA += A) {
    if (repeatA.includes(B)) return count;
  }
  return -1;
};
// @lc code=end

