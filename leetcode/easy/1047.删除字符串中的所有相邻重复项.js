/*
 * @lc app=leetcode.cn id=1047 lang=javascript
 *
 * [1047] 删除字符串中的所有相邻重复项
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicates = function (s) {
  let arr = s.split('')
  for (let i = arr.length-1; i > 0; i--) {
    if(arr[i]===arr[i-1]){
      arr.splice(i-1,2)
    }
  }
  return arr.join('')
};
console.log(removeDuplicates('abbaca'))
// @lc code=end

