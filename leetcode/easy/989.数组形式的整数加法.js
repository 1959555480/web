/*
 * @lc app=leetcode.cn id=989 lang=javascript
 *
 * [989] 数组形式的整数加法
 */

// @lc code=start
/**
 * @param {number[]} num
 * @param {number} k
 * @return {number[]}
 */
var addToArrayForm = function (num, k) {
  // 取两数最长
  let maxLength = Math.max(num.length, String(k).split('').length)
  // 给两数补零
  let a = num.join('').padStart(maxLength, 0).split('').map(item => +item)
  let b = String(k).padStart(maxLength, 0).split('').map(item => +item)
  // 是否进位
  let flag = false
  let target = []
  for (let i = maxLength - 1; i >= 0; i--) {
    if (flag) {
      // 进位
      if (a[i] + b[i] + 1 > 9) {
        flag = true
        // 进位的同时当前计算也进位
        target.push(+String(a[i] + b[i]+1).substring(1))
        if(i===0){
          target.push(1)
        }
      } else {
        // 进位的同时当前计算不进位
        target.push(a[i] + b[i] + 1)
        flag = false
      }
    } else {
      // 不进位
      if (a[i] + b[i] > 9) {
        flag = true
        // 不进位的同时当前计算进位 
        target.push(+String(a[i] + b[i]).substring(1))
        if(i===0){
          target.push(1)
        }
      } else {
        // 不进位的同时当前计算不进位
        target.push(a[i] + b[i])
      }

    }
  }
  return target.reverse()
};
console.log(addToArrayForm([4,9], 983))
// @lc code=end

