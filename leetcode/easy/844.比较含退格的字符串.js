/*
 * @lc app=leetcode.cn id=844 lang=javascript
 *
 * [844] 比较含退格的字符串
 */

// @lc code=start
/**
 * @param {string} S
 * @param {string} T
 * @return {boolean}
 */
var backspaceCompare = function (S, T) {
  function deleteString(str) {
    while(str.includes('#')){
      let index = str.indexOf('#')
      if(index === 0) {
        index = 0
        str = str.replace(str.substr(index, 1), '')
      }else{
        index = index-1
        str = str.replace(str.substr(index, 2), '')
      }
      
    }
    return str
  }

  return deleteString(S) === deleteString(T)
};
console.log(backspaceCompare('a##c','#a#c'))
// @lc code=end

