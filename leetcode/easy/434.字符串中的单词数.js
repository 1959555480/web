/*
 * @lc app=leetcode.cn id=434 lang=javascript
 *
 * [434] 字符串中的单词数
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var countSegments = function (s) {
  // let conut = 0
  // for(let i =0;i<arr.length;i++){
  //   if(!arr[i]==''){
  //     conut++
  //   }
  // }
  // return conut

  // 简写
  return s.split(' ').filter(item => item != '').length
};
// console.log(countSegments("a   b                          d"))
// @lc code=end

