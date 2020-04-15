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
  if(numRows>2){//大于2才开始要进行相加
    for(let i = 2; i<numRows;i++){
      for(let j = 1; j<i;j++){//j 是第i项第j个元素要相加 上一行的对应左右元素
        list[i][j] = list[i-1][j-1]+list[i-1][j]
      }
    }
  }
  return list
};

// generate(6)
// @lc code=end

