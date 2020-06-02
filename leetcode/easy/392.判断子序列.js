/*
 * @lc app=leetcode.cn id=392 lang=javascript
 *
 * [392] 判断子序列
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
      
  let flag=true;
  let str=t;
      
  // 找到就把前面的全部杀掉
  for(let j=0;j<s.length;j++){
      let i=str.indexOf(s[j]);
      if(i>-1){
          str=str.substr(i+1)
      }else{
          flag=false
          break;
      }
      
  }
      
  return flag
};
// @lc code=end

