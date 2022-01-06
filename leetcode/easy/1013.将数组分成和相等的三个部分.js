/*
 * @lc app=leetcode.cn id=1013 lang=javascript
 *
 * [1013] 将数组分成和相等的三个部分
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @return {boolean}
 */
var canThreePartsEqualSum = function(arr) {
  // 计算总和 得到每部分需要达到的和
  let sum = arr.reduce((cur,sum,index)=>{
    return sum + cur
  })
  // 遍历对比
  let a1,a2,a3
  let everySum = 0
  let i = 1
  arr.forEach((item,index)=>{
    everySum += item
    if(everySum === sum/3){
      if(i===1){
        a1 = index
      }
      if(i===2){
        a2 = index
      }
      if(i===3){
        a3 = index
      }
      i++
      everySum = 0
    }
  })
  return Boolean(a1!==undefined&&a2!==undefined&&a3!==undefined)
};
console.log(canThreePartsEqualSum([0,0,0,0]))
// @lc code=end

