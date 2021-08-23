/*
 * @lc app=leetcode.cn id=953 lang=javascript
 *
 * [953] 验证外星语词典
 */

// @lc code=start
/**
 * @param {string[]} words
 * @param {string} order
 * @return {boolean}
 */
var isAlienSorted = function (words, order) {
  for (let i = 0; i < words.length - 1; i++) {
    let first = words[i] //第一个
    let second = words[i + 1] //后一个
    let leng = Math.max(first.length,second.length) //拿最短字符串长度
    for(let j = 0; j<leng;j++){
      let one = first[j]
      let two = second[j]
      if(one!==two){ //不等 遇到对比
        if(order.indexOf(one)>order.indexOf(two)){
          return false
        }else{
          break
        }
      }
    }
    
  }
  return true
};
console.log(isAlienSorted(["hello","leetcode"],'hlabcdefgijkmnopqrstuvwxyz'))
// @lc code=end
