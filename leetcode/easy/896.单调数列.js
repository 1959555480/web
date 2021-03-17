/*
 * @lc app=leetcode.cn id=896 lang=javascript
 *
 * [896] 单调数列
 */

// @lc code=start
/**
 * @param {number[]} A
 * @return {boolean}
 */
var isMonotonic = function (A) {
  // 法一 直接算
  // if ([...new Set(A)][0] > [...new Set(A)][1]) {
  //   for (let i = 0; i < A.length - 1; i++) {
  //     if (A[i] < A[i + 1]) {
  //       return false
  //     }
  //   }
  // } else {
  //   for (let i = 0; i < A.length - 1; i++) {
  //     if (A[i] > A[i + 1]) {
  //       return false
  //     }
  //   }
  // }
  // return true
  // 法二 一次遍历
  let isAdd = false
  let isCut = false
  for (let i = 0; i < A.length - 1; i++) {
    if (A[i] < A[i + 1]) {
      isAdd = true
    }
    if (A[i] > A[i + 1]) {
      isCut = true
    }
  }
  return (!isAdd && isCut) || (!isCut && isAdd) || (!isAdd && !isCut)
};
// @lc code=end

