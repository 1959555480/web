/*
 * @lc app=leetcode.cn id=66 lang=javascript
 *
 * [66] 加一
 */

// @lc code=start
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
  let c = (BigInt(digits.join(''))+1n+'').split('')
  let newArr = c.map(Number)
  return newArr
};
// ES10中，规范新引入了一种基本数据类型BigInt。它可以完美地兼容大数。
// @lc code=end
// console.log(plusOne([6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3]))
