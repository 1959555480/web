/*
 * @lc app=leetcode.cn id=682 lang=javascript
 *
 * [682] 棒球比赛
 */

// @lc code=start
/**
 * @param {string[]} ops
 * @return {number}
 */
var calPoints = function (ops) {
  let sum = 0
  for (let i = 0; i < ops.length; i++) {
    if (ops[i] == 'D') {
      sum += Number(ops[i - 1]) * 2
      ops[i] = Number(ops[i - 1]) * 2 + ''
    }
    else if (ops[i] == '+') {
      sum += Number(ops[i - 1]) + Number(ops[i - 2])
      ops[i] = Number(ops[i - 1]) + Number(ops[i - 2]) + ''
    }
    else if (ops[i] == 'C') {
      sum -= Number(ops[i - 1])
      ops.splice(i - 1, 2)
      i = i-2
    } else {
      sum += Number(ops[i])
    }
    // console.log(`第${i+1}轮`,sum, ops)
  }
  return sum
  // console.log(sum, ops)
};
calPoints(['5', '-2', '4', 'C', 'D','9','+','+'])
// @lc code=end

