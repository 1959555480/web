/*
 * @lc app=leetcode.cn id=905 lang=javascript
 *
 * [905] 按奇偶排序数组
 */

// @lc code=start
/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParity = function (A) {
  for(let i = A.length;i>-1;i--){
    if (A[i] % 2 !== 0) {
      A.push(...A.splice(i, 1))
    }
  }
  return A
};
console.log(sortArrayByParity([3, 1, 2, 4]))
// @lc code=end

