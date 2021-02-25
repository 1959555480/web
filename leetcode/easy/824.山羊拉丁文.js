/*
 * @lc app=leetcode.cn id=824 lang=javascript
 *
 * [824] 山羊拉丁文
 */

// @lc code=start
/**
 * @param {string} S
 * @return {string}
 */
var toGoatLatin = function (S) {
  let targetArr = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']
  let arr = S.split(' ')
  let newArr = []
  arr.forEach((item, index) => {
    if (targetArr.includes(item[0])) {
      newArr.push(item + 'ma' + 'a'.repeat(index + 1))
    } else {
      newArr.push(item.substring(1) + item.substring(0, 1) + 'ma' + 'a'.repeat(index + 1))
    }
  })
  return newArr.join(' ')
};
// console.log(toGoatLatin("I speak Goat Latin"))
// @lc code=end

