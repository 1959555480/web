/*
 * @lc app=leetcode.cn id=67 lang=javascript
 *
 * [67] 二进制求和
 */

// @lc code=start
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
  let add = ''//
  let carry = 0//进位
  for (let i = a.length - 1, j = b.length - 1; i >= 0 || j >= 0; i--, j--) {
    let sum = carry//正常不需要进位的时候为0 需要进位的时候为1
    sum += i >= 0 ? parseInt(a[i]) : 0
    sum += j >= 0 ? parseInt(b[j]) : 0
    add += sum % 2//拿到末位先加得到为1或者0
    carry = Math.floor(sum / 2)//看是否需要进位 1为需要 0不需要--->需要进位的时候下次循环开始给sum赋值+1就实现进位
    // console.log(a[i], b[j], add, carry)
  }
  add += carry == 1 ? carry : ''
  return add.split('').reverse().join('')
};
addBinary("1010", "1011")

// 直接使用BigInt
var addBinary = function(a, b) {
  return (BigInt(`0b${a}`)+BigInt(`0b${b}`)).toString(2)
};
console.log(addBinary("11","1"))
// @lc code=end

