/*
 * @lc app=leetcode.cn id=812 lang=javascript
 *
 * [812] 最大三角形面积
 */

// @lc code=start
/**
 * @param {number[][]} points
 * @return {number}
 */
var largestTriangleArea = function (points) {
  // 获取三边长 points[i] points[j] points[k]
  let number = -1;
  for(let i of points)
      for(let j of points)
          for(let k of points)
              number = Math.max(number,(i[0]*j[1] + j[0]*k[1] + k[0]*i[1] - (i[1]*j[0] + j[1]*k[0] + k[1]*i[0]))/2);
  return number
};
console.log(largestTriangleArea([[0,0],[0,1],[1,0],[0,2],[2,0]]))
// @lc code=end

