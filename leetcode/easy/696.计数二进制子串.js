/*
 * @lc app=leetcode.cn id=696 lang=javascript
 *
 * [696] 计数二进制子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var countBinarySubstrings = function(s) {
  let number = 0;
  const arr = s.match(/0+|1+/g);    // 把字符串切割成['00', '11', '00', '11']这样的数组

  for(let i = 0, len = arr.length; i < len - 1; i++){
    number += Math.min(arr[i].length, arr[i+1].length);     // 相邻比较，长度更短的则为这一组的出现次数
  }

  return number;
};
// @lc code=end

