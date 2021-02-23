/*
 * @lc app=leetcode.cn id=819 lang=javascript
 *
 * [819] 最常见的单词
 */

// @lc code=start
/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
var mostCommonWord = function (paragraph, banned) {
  let strArr
  // debugger
  strArr = paragraph.trim().replace(/\!|\?|\'|\,|\;|\./g, ' ').toLowerCase().split((/\s+/g))
  console.log("stra",strArr)
  let map = new Map()
  for (let index = 0; index < strArr.length; index++) {
    if (!map.has(strArr[index])) {
      map.set(strArr[index], 1)
    } else {
      map.set(strArr[index], map.get(strArr[index]) + 1)
    }
  }
  for (let i = 0; i < banned.length; i++) {
    if (map.has(banned[i])) {
      map.delete(banned[i])
    }
  }
  let result = [...map.values()].sort((a,b)=>b-a)[0]
  let resultStr
  for (let [key, value] of map.entries()) {
    if (value === result&&key)
      resultStr = key;
  }
  console.log(map,result)
  return resultStr
};
// @lc code=end

