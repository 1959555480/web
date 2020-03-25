/*
 * @lc app=leetcode.cn id=13 lang=javascript
 *
 * [13] 罗马数字转整数
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  //特殊情况
  var s = s.split('')
  let result = 0
  for(let i = 0; i<s.length; i++) {
    let j = i 
    if(s[i] == 'I'&&s[i+1] =='V'){result+=4;i++}
    if(s[i] == 'I'&&s[i+1] =='X'){result+=9;i++}
    if(s[i] == 'X'&&s[i+1] =='L'){result+=40;i++}
    if(s[i] == 'X'&&s[i+1] =='C'){result+=90;i++}
    if(s[i] == 'C'&&s[i+1] =='D'){result+=400;i++}
    if(s[i] == 'C'&&s[i+1] =='M'){result+=900;i++}
    if(i == j) {
      if(s[i] == "I") { result += 1}
      if(s[i] == "V") { result += 5}
      if(s[i] == "X") { result += 10}
      if(s[i] == "L") { result += 50}
      if(s[i] == "C") { result += 100}
      if(s[i] == "D") { result += 500}
      if(s[i] == "M") { result += 1000}
    }
  }
  return result
};

console.log( romanToInt('IV') )
// @lc code=end

