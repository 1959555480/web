/*
 * @lc app=leetcode.cn id=728 lang=javascript
 *
 * [728] 自除数
 */

// @lc code=start
/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var selfDividingNumbers = function (left, right) {
  let res = [];
  for (let i = left; i <= right; i++) {
    i.toString().split('').every(num => i % parseInt(num) === 0) && res.push(i)
  }
  return res;
};
// @lc code=end

