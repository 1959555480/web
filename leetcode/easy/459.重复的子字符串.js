/*
 * @lc app=leetcode.cn id=459 lang=javascript
 *
 * [459] 重复的子字符串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function (s) {
  let SS = s + s
  let str = ''
  for(let i = 1; i<SS.length-1;i++){
    str += SS[i]
  }
  console.log('str',str)
  if(str.includes(s)){
    return true
  }
  return false
};
// console.log(repeatedSubstringPattern("12341234"))
// @lc code=end

/**
  * 假如母串S由子串s重复n次组成 S = sn
  * S + S = 2sn
  * 如果存在
  * S+S 去头去尾之后必然会至少有一个S 
 */