/*
 * @lc app=leetcode.cn id=414 lang=javascript
 *
 * [414] 第三大的数
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function (nums) {
  let max = 0
  let setArr = [...new Set(nums)]  //去重
  if (setArr.length < 3) { // 剩下数字小于2个就取最大
    return setArr.reduce((x, y) => {
      return x > y ? x : y
    })
  }
  // 查找三次 最大的去掉 取第三次的值
  for (let i = 0; i < 3; i++) {
    max = setArr.reduce((x, y) => {
      return x > y ? x : y
    })
    if (i == 2) {
      return max
    }
    setArr.splice(setArr.indexOf(max),1)
  }
  return max
};
// console.log(thirdMax([1,2,-2147483648]))
// @lc code=end


