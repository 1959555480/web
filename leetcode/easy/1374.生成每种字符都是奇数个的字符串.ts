/*
 * @lc app=leetcode.cn id=1374 lang=typescript
 *
 * [1374] 生成每种字符都是奇数个的字符串
 */

// @lc code=start
function generateTheString(n: number): string {
  let strArr = Array(n).fill('a')
  if(n%2===0){//偶数拆分
    strArr[0] = 'b'
  }
  return strArr.join('')
};
// @lc code=end

