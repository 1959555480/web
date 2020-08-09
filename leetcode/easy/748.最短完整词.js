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
  let letter = licensePlate.match(/[A-Za-z]/g).join('').toLowerCase()
  words = words.sort(function (a, b) {
    return a.length - b.length
  })
  for (let i = 0; i < words.length;) {
    for (let j = 0; j < letter.length;) {
      console.log("提交", words[i], letter[j], words[i].indexOf(letter[j]) == 0)
      if (words[i].indexOf(letter[j])== -1) { // 不存在
        console.log(1)
        i++
        j = 0

      } else { // 存在
        j++
        console.log(2)
        if (j == letter.length) {23
          console.log("letter[i]", letter[i])
        }
        break
      }
    }
  }
  console.log("-1")
};
shortestCompletingWord("1s3 PSt", ["step2222222222", "steps", "stripe", "stepple"])
// @lc code=end