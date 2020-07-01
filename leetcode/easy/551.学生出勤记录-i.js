/*
 * @lc app=leetcode.cn id=551 lang=javascript
 *
 * [551] 学生出勤记录 I
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var checkRecord = function (s) {
  // 法一
  // let aNum = 0
  // for (let i = 0; i < s.length; i++) {
  //   if (s[i] == 'A') {
  //     aNum++
  //     if (aNum > 1) return false
  //   }
  //   if (s.indexOf('LLL') != -1) {
  //     return false
  //   }
  // }
  // return true
  // 法二
  // console.log(s)
  // let rule = /.*A+.*A+|L{3,}/g
  // return !rule.test(s)
  return !(/.*A+.*A+|L{3,}/g).test(s)
};
// console.log(checkRecord("PPALLL"))
// @lc code=end

