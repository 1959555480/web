/*
 * @lc app=leetcode.cn id=717 lang=javascript
 *
 * [717] 1比特与2比特字符
 */

// @lc code=start
/**
 * @param {number[]} bits
 * @return {boolean}
 */
var isOneBitCharacter = function(bits) {
  let regRules = /^(10|11|0)*0$/
  return regRules.test(bits.join(''))
};
console.log(isOneBitCharacter([0,0]))
// @lc code=end

