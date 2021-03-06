/*
 * @lc app=leetcode.cn id=860 lang=javascript
 *
 * [860] 柠檬水找零
 */

// @lc code=start
/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function (bills) {
  // 存储零钱
  let money5 = 0
  let money10 = 0

  for (let i = 0; i < bills.length; i++) {
    let item = bills[i]
    if (item === 5) {
      money5++
    } else if (item === 10) {
      if (money5 > 0) {
        money5--
        money10++
      } else {
        return false
      }
    } else if (item === 20) {
      // 统计5的个数
      if (money10 > 0 && money5 > 0) {
        money5--
        money10--
      } else if (money5 >= 3) {
        money5 -= 3
      } else {
        return false
      }
    }
    // console.log(`第${i + 1}次`, `零钱：${moneyArr}`)
  }
  return true
};
console.log(lemonadeChange([5, 5, 5, 10, 20]))
// @lc code=end

