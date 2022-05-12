/*
 * @lc app=leetcode.cn id=1446 lang=typescript
 *
 * [1446] 连续字符
 */

// @lc code=start
function maxPower(s: string): number {
  let preLeng = 1
  let leng = 1
  for (let i = 1; i < s.length; i++) {
    if(s[i]!==s[i-1]){
      if(leng<preLeng){
        leng = preLeng
      }
      preLeng = 1
    }else{
      preLeng++
    }
  }
  return Math.max(leng,preLeng)
};
console.log(maxPower('cc'))
// @lc code=end

