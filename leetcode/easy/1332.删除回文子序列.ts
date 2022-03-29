/*
 * @lc app=leetcode.cn id=1332 lang=typescript
 *
 * [1332] 删除回文子序列
 */

// @lc code=start
function removePalindromeSub(s: string): number {
  for(let i = 0;i<Math.floor(s.length/2);i++){
    if(s[i]!==s[s.length-1-i]){
      return 2
    }
  }
  return 1
};
console.log(removePalindromeSub('abb'))
// @lc code=end

