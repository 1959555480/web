/*
 * @lc app=leetcode.cn id=804 lang=javascript
 *
 * [804] 唯一摩尔斯密码词
 */

// @lc code=start
/**
 * @param {string[]} words
 * @return {number}
 */
var uniqueMorseRepresentations = function (words) {
  let abc = [".-", "-...", "-.-.", "-..", ".", "..-.", "--.", "....", "..", ".---", "-.-", ".-..", "--", "-.", "---", ".--.", "--.-", ".-.", "...", "-", "..-", "...-", ".--", "-..-", "-.--", "--.."]
  let ABC = 'abcdefghijklmnopqrstuvwxyz'
  obj = ABC.split('').reduce((sum, cur, index) => {
    sum[cur] = abc[index]
    return sum
  }, {})
  let arr = []
  words.forEach((item, index) => {
    item.split('').forEach(i => {
      arr[index] = (arr[index] || '') + obj[i]
    })
  })
  return new Set(arr).size
};
// console.log(uniqueMorseRepresentations(["gin", "zen", "gig", "msg"]))
// @lc code=end

