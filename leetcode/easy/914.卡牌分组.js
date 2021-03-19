/*
 * @lc app=leetcode.cn id=914 lang=javascript
 *
 * [914] 卡牌分组
 */

// @lc code=start
/**
 * @param {number[]} deck
 * @return {boolean}
 */
var hasGroupsSizeX = function (deck) {
  // 先统计个数
  let map = new Map()
  deck.forEach(item => {
    if (!map.has(item)) {
      map.set(item, 1)
    } else {
      map.set(item, map.get(item) + 1)
    }
  })
  let countArr = [...map.values()]
  console.log("count数组", countArr)
  if (countArr.length === 1 && countArr[0] >= 2) return true
  let result = countArr[0]
  // 求最大公约数
  for (let i = 0; i < countArr.length - 1; i++) {
    result = gcd(result, countArr[i + 1])
    console.log("最大公约数",result) 
  }
  console.log('整个数组的最大公约数', result)
  return result >= 2
  //  暴力求最大公约数
  // function gcd(numberA, numberB) {
  //   let smallNum = numberA < numberB ? numberA : numberB
  //   let bigNum = numberA >= numberB ? numberA : numberB
  //   if(bigNum%smallNum ===0){
  //     return smallNum
  //   }
  //   console.log("smallNum bigNum",smallNum,bigNum)
  //   let first = 1
  //   for (let i = 2; i <= smallNum / 2; i++) {
  //     if (numberA % i === 0 && numberB % i === 0) {
  //       first = i
  //     }
  //   }
  //   console.log("当前公约数",first)
  //   return first
  // }
  // 辗转相除来求最大公约数
  function gcd(numberA, numberB) {
    return numberB === 0 ? numberA : gcd(numberB, numberA % numberB)
    // if(numberB === 0){
    //   return numberA
    // }else{
    //   return gcd(numberB,numberA % numberB)
    // }
  }

};
console.log(hasGroupsSizeX([0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 2, 2, 3, 3, 4, 4]))
// @lc code=end

