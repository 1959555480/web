/*
 * @lc app=leetcode.cn id=1078 lang=javascript
 *
 * [1078] Bigram 分词
 */

// @lc code=start
/**
 * @param {string} text
 * @param {string} first
 * @param {string} second
 * @return {string[]}
 */
var findOcurrences = function(text, first, second) {
  let textArr = text.split(' ')
  let  target = []
  for(let i = 0; i<textArr.length;i++){
    if(textArr[i] === first && textArr[i+1] === second && textArr[i+2]){
      target.push(textArr[i+2])
    }
  }
  return target
};
findOcurrences('we will we will rock you','we','will')
// @lc code=end

