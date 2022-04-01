/*
 * @lc app=leetcode.cn id=1351 lang=typescript
 *
 * [1351] 统计有序矩阵中的负数
 */

// @lc code=start
function countNegatives(grid: number[][]): number {
  let mLeng: number = grid.length
  let nLeng: number = grid[0].length

  let count:number = 0

  for (let i = 0; i < mLeng; i++) {
    for (let j = 0; j < nLeng; j++) {
      if (grid[i][j] < 0) {
        // mLeng = i
        // 长乘宽
        count = count + (mLeng-i)*(nLeng-j)
        nLeng = j
      }
    }
  }
  return count
};
console.log(countNegatives([[4,3,2,-1],[3,2,1,-1],[1,1,-1,-2],[-1,-1,-2,-3]]))
// @lc code=end

