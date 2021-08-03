/*
 * @lc app=leetcode.cn id=942 lang=javascript
 *
 * [942] 增减字符串匹配
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number[]}
 */
var diStringMatch = function(s) {
  let target = []
  let sourse = []
  for(let i = 0;i<s.length+1;i++){
    sourse.push(i)
  }
  for(let i = 0;i<s.length;i++){
    if(s[i]==='I'){
      target.push(+sourse.splice(0,1))
    }else{
      target.push(sourse.pop())
    }
  }
  target.push(+sourse[0])
  return target
};
console.log(diStringMatch("III"))
// @lc code=end

