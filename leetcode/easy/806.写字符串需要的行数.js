/*
 * @lc app=leetcode.cn id=806 lang=javascript
 *
 * [806] 写字符串需要的行数
 */

// @lc code=start
/**
 * @param {number[]} widths
 * @param {string} s
 * @return {number[]}
 */
var numberOfLines = function (widths, s) {
  let abc = 'abcdefghijklmnopqrstuvwxyz'
  let abcArr = abc.split('')
  let abcObj = widths.reduce((sum, cur, index) => {
    sum[abcArr[index]] = cur
    return sum
  }, {})
  sArr = s.split('')
  let row = 1
  let sum = 0
  for (let i = 0; i < sArr.length; i++) {
    if ((sum + abcObj[sArr[i]]) > 100) {
      row ++
      sum = 0
      sum = sum + abcObj[sArr[i]]
    } else {
      sum = sum + abcObj[sArr[i]]
    }
  }
  lastWidth = sum
  return [row,sum]
  // console.log("sum", sum,count)
};
// numberOfLines([10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10], 'abcdefghijklmnopqrstuvwxyz')
// @lc code=end

