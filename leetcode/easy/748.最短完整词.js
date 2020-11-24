/*
 * @lc app=leetcode.cn id=748 lang=javascript
 *
 * [748] 最短完整词
 */

// @lc code=start
/**
 * @param {string} licensePlate
 * @param {string[]} words
 * @return {string}
 */
var shortestCompletingWord = function (licensePlate, words) {
  //处理牌照
  var str = /[a-zA-Z]/g
  var t = licensePlate.toLowerCase().match(str)
  console.log(t)

  //处理单词
  var count = 1000000;
  var result = ''

  words.map(function (item) {
    var a = item.split('');

    for (var i = 0; i < t.length; i++) {
      var flag = false
      for (var j = 0; j < a.length; j++) {
        if (t[i] == a[j]) {
          a.splice(j, 1)
          flag = true
          break;
        }
      }
      if (flag == false) {
        return
      }
    }

    if (item.length < count) {
      count = item.length
      result = item
    }
  })
  return result
};
console.log(shortestCompletingWord("1s3 PSt", ["step", "steps", "stripe", "stepple"]))
// @lc code=end