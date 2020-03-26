/*
 * @lc app=leetcode.cn id=14 lang=javascript
 *
 * [14] 最长公共前缀
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  if (strs.length == 0) {
    return ''
  }
  str = strs[0];
  for (let i = 1; i < strs.length; i++) {
    while (strs[i].indexOf(str) != 0) {
      // 数组[0]不符合数组[1] 需要裁剪
      str = str.substring(0, str.length - 1);
    }
    // 符合就跳出 去数组[i+1]再进行判断
  }
  return str
};
console.log(longestCommonPrefix(["c1","cccccc","ccc"]))
// @lc code=end

