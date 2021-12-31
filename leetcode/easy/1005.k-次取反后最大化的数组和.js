/*
 * @lc app=leetcode.cn id=1005 lang=javascript
 *
 * [1005] K 次取反后最大化的数组和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var largestSumAfterKNegations = function (nums, k) {
  //  如果有负数 全部取负数
  let nums1 = JSON.parse(JSON.stringify(nums))
  // 先排序 
  let sortArr = nums1.sort((a, b) => { return a - b })
  // 循环k次 把所有负数取反  如果负数不够 对最小数取反
  for (let i = 0; i < k; i++){
    if(sortArr[i]<0){
      sortArr[i] = -sortArr[i]
    }else {
      // 负数用完 先判断剩下是奇数还是偶数
      if((k-i)%2 === 0) {
        break
      }else{
        sortArr = sortArr.sort((a, b) => { return a - b })
        sortArr[0] = -sortArr[0]
      }
    }
  }
  return sortArr.reduce((cur,sum,index)=>{
    return cur + sum
  })
};
console.log('44',largestSumAfterKNegations([-14,-17,2,-12,4,6,-26,11,-22,-14],9))
// @lc code=end

