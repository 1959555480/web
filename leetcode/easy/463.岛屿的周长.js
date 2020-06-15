/*
 * @lc app=leetcode.cn id=463 lang=javascript
 *
 * [463] 岛屿的周长
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function (grid) {
  let count = 0;
  for (let i = 0; i < grid.length; i++) {
    let arr = grid[i]
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] == 1) {
        // 每一个方块计算 如：上边不存在或者为0 两种情况存在一种为true就加一 
        if (arr[j - 1] && arr[j - 1] == 0 || !arr[j - 1]) count++ // 左
        if (arr[j + 1] && arr[j + 1] == 0 || !arr[j + 1]) count++ // 右
        if (grid[i - 1] && grid[i - 1][j] == 0 || !grid[i - 1]) count++ // 上
        if (grid[i + 1] && grid[i + 1][j] == 0 || !grid[i + 1]) count++ // 下
      }
    }
  }
  return count

};
// islandPerimeter([[0,1,0,0],[1,1,1,0],[0,1,0,0],[1,1,0,0]])
// @lc code=end

