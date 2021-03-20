/*
 * @lc app=leetcode.cn id=917 lang=javascript
 *
 * [917] 仅仅反转字母
 */

// @lc code=start
/**
 * @param {string} S
 * @return {string}
 */
var reverseOnlyLetters = function(S) {
  let rules = /[a-zA-Z]/
  // 存储需要逆转的数组
  let arr = []
  // 原数组
  let curArr = S.split("")
  for(let i = 0;i<curArr.length;i++){
    if(rules.test(curArr[i])){
      arr.push(curArr[i])
    }
  }
  for(let i = 0;i<curArr.length;i++){
    if(rules.test(curArr[i])){
      curArr[i] = arr.pop()
    }
  }
  return curArr.join("")
};
console.log(reverseOnlyLetters('Test1ng-Leet=code-Q!'))
// @lc code=end

