/*
 * @lc app=leetcode.cn id=118 lang=javascript
 *
 * [118] 杨辉三角
 */

// @lc code=start
/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
  let list = []
  for (let i = 0; i < numRows; i++) {
    let item = []
    for (let j = 0; j <= i; j++) {
      item.push(1)
    }
    list.push(item)
  }
  if(numRows>2){
    for(let i = 2; i<numRows;i++){
      for(let j = 1; j<i;j++){
        list[i][j] = list[i-1][j-1]+list[i-1][j]
      }
    }
  }
  return list
};

// generate(6)
// @lc code=end

