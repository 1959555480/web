/*
 * @lc app=leetcode.cn id=788 lang=javascript
 *
 * [788] 旋转数字
 */

// @lc code=start
/**
 * @param {number} N
 * @return {number}
 */
var rotatedDigits = function(N) {
  let ans = 0;
  let reg1 = new RegExp("3|4|7");
  let reg2 = new RegExp("2|5|6|9");
  for(let i=1; i<=N; i++) {
    if(!reg1.test(i) && reg2.test(i)) {
      ans++;
    }
  }
  return ans; 
};
// @lc code=end

