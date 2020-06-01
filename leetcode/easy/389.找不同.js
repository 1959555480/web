/*
 * @lc app=leetcode.cn id=389 lang=javascript
 *
 * [389] 找不同
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function (s, t) {
  let x = s.split('')
  let y = t.split('')
  for (let i = 0; i < y.length; i++) {
    if(!x.includes(y[i])){
      return y[i]
    }else{
      x[x.indexOf(y[i])] = null
      y[i] = null
    }
  }
};
// console.log(findTheDifference("aa","aaa"))
// @lc code=end

