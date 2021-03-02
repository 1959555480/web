/*
 * @lc app=leetcode.cn id=836 lang=javascript
 *
 * [836] 矩形重叠
 */

// @lc code=start
/**
 * @param {number[]} rec1
 * @param {number[]} rec2
 * @return {boolean}
 */
var isRectangleOverlap = function (rec1, rec2) {
  // 两个矩阵重叠必然存在 两个矩阵左下角坐标xy轴最大 小于 两矩阵右上角坐标xy轴最小
  return (Math.max(rec1[0],rec2[0])<Math.min(rec1[2],rec2[2])) && (Math.max(rec1[1],rec2[1])<Math.min(rec1[3],rec2[3]))
};
isRectangleOverlap([0, 0, 2, 3], [2, 2, 4, 4])
// @lc code=end

