/*
 * @lc app=leetcode.cn id=205 lang=javascript
 *
 * [205] 同构字符串
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
  // 使用indexOf() 同构的话说明出现首次字符串的位置是一样的
  for (let i = 0; i < s.length; i++){
    // console.log('s',s.indexOf(s[i]))
    // console.log('t',t.indexOf(t[i]))
    if(s.indexOf(s[i])!==t.indexOf(t[i])){
      return false
    }
  }
  return true
};
// console.log(isIsomorphic('113','222'))
// @lc code=end

