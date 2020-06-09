/*
 * @lc app=leetcode.cn id=443 lang=javascript
 *
 * [443] 压缩字符串
 */

// @lc code=start
/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function (chars) {
  let count = 1 // 计数
  for (let i = 0; i < chars.length; i++) {
    if (chars[i] == chars[i + 1]) { //前后相同，不管
      count++
    } else { //前后不同 
      if (count != 1) { // 至少2个相同才替换
        chars.splice(i - count + 2, count - 1, ...String(count).split(''))
        i = i + 2 - count
        count = 1
      }
    }
  }
  return chars.length
};
// compress(['a', 'a', 'a', 'b','b','c','c'])
// @lc code=end

