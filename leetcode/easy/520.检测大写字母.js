/*
 * @lc app=leetcode.cn id=520 lang=javascript
 *
 * [520] 检测大写字母
 */

// @lc code=start
/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function(word) {
  // 法一 三种情况判定
  // let w1 = word.toUpperCase()
  // let w2 = word.toLowerCase()
  // let w3 = w1[0] + w2.substr(1,w2.length)
  // if(word == w1 ||word == w2||word == w3){
  //   return true
  // }else{
  //   return false
  // }
  // 法二 正则
  return /^([A-Z]+)$|^[A-Z]([a-z]+)$|^([a-z]+)$/.test(word)
};
// console.log(detectCapitalUse("fab"))
// @lc code=end

