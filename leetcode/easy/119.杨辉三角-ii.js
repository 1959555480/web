/*
 * @lc app=leetcode.cn id=119 lang=javascript
 *
 * [119] 杨辉三角 II
 */

// @lc code=start
/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function (rowIndex) {
  rowIndex = rowIndex + 1 
  let result = []
  for (let i = 0; i < rowIndex; i++) {
    let newArr = []
    for (let j = 0; j <= i; j++) {
      newArr.push(1)
    }
    result.push(newArr)
  }
  while (rowIndex > 2) {
    for (let i = 2; i < rowIndex; i++) {
      for (let j = 1; j < i; j++) {
        result[i][j] = result[i-1][j-1] + result[i-1][j]
      }
    }
    // console.log(result[rowIndex-1])
    return  result[rowIndex-1]
  }
  return result[rowIndex-1]
};
// getRow(3)
// @lc code=end

