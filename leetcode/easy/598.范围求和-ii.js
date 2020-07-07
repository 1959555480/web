/*
 * @lc app=leetcode.cn id=598 lang=javascript
 *
 * [598] 范围求和 II
 */

// @lc code=start
/**
 * @param {number} m
 * @param {number} n
 * @param {number[][]} ops
 * @return {number}
 */
var maxCount = function (m, n, ops) {
  let xarr = [];
  let yarr = [];
  if (ops.length === 0) return m * n;
  for (let i = 0; i < ops.length; i++) {
    const val = ops[i];
    xarr.push(val[0]);
    yarr.push(val[1]);
  }
  xarr.sort((a, b) => a - b);
  yarr.sort((a, b) => a - b);

  return xarr[0] * yarr[0]
  // console.log(xarr[0] * yarr[0])
};

// maxCount(3, 3,[[2,2],[3,3]])
// @lc code=end

