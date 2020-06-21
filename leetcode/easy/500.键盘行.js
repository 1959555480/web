/*
 * @lc app=leetcode.cn id=500 lang=javascript
 *
 * [500] 键盘行
 */

// @lc code=start
/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function (words) {
  // 正则 最简单
  let reg1 = /^[qwertyuiop]+$/i
  let reg2 = /^[asdfghjkl]+$/i
  let reg3 = /^[zxcvbnm]+$/i
  let arr = words.filter(item=>{
    return reg1.test(item)||reg2.test(item)||reg3.test(item)
  })
  return arr
};
// console.log(findWords(["Hello", "Alaska", "Dad", "Peace"]))
// @lc code=end

