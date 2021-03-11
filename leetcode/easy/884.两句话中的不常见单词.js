/*
 * @lc app=leetcode.cn id=884 lang=javascript
 *
 * [884] 两句话中的不常见单词
 */

// @lc code=start
/**
 * @param {string} A
 * @param {string} B
 * @return {string[]}
 */
var uncommonFromSentences = function (A, B) {
  let newArr = [...A.split(' '), ...B.split(' ')]
  let map = new Map()
  let resultArr = []
  newArr.forEach((item, index) => {
    if (map.has(item)) {
      map.set(item, map.get(item) + 1)
    } else {
      map.set(item, 1)
    }
  })
  for (let [key, value] of map) {
    if (value === 1) {
      resultArr.push(key)
    }
  }
  return resultArr
};
// console.log(uncommonFromSentences('s z z z s', 's z ejt'))
// @lc code=end

