/*
 * @lc app=leetcode.cn id=461 lang=javascript
 *
 * [461] 汉明距离
 */

// @lc code=start
/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function (x, y) {
  // let xArr = x.toString(2).split('')
  // let yArr = y.toString(2).split('')
  // let count = 0
  // if (xArr.length > yArr.length) {
  //   len = xArr.length - yArr.length
  //   for (let i = 0; i < len; i++) {
  //     yArr.splice(0, 0, '0')
  //   }
  // } else if (xArr.length < yArr.length) {
  //   len = yArr.length - xArr.length
  //   for (let i = 0; i < len; i++) {
  //     xArr.splice(0, 0, '0')
  //   }
  // }

  // for (let i = 0; i < xArr.length; i++) {
  //   if (xArr[i] != yArr[i]) {
  //     count++
  //   }
  // }
  // return count

  // 布赖恩·克尼根算法
  let v = x ^ y //异或 相同位为0，不同位为1
  let count = 0
  while (v){
    v = v & (v-1) 
    // 5 & 4     0101 0100 ==> 0100    4
    // 4 & 3     0100 0011 ==> 0000    0
    // 执行了两次 count 为 2
    ++count
  }
  return count
};
// hammingDistance(1,4)
// @lc code=end

