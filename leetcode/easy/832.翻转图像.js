/*
 * @lc app=leetcode.cn id=832 lang=javascript
 *
 * [832] 翻转图像
 */

// @lc code=start
/**
 * @param {number[][]} image
 * @return {number[][]}
 */
var flipAndInvertImage = function (image) {
  return image.map(item => {
    return item.reverse().map(i => {
      return i === 1 ? 0 : 1
    })
  })
};
console.log(flipAndInvertImage([[1, 1, 0], [1, 0, 1], [0, 0, 0]]))
// @lc code=end

