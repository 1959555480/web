/*
 * @lc app=leetcode.cn id=575 lang=javascript
 *
 * [575] 分糖果
 */

// @lc code=start
/**
 * @param {number[]} candies
 * @return {number}
 */
var distributeCandies = function(candies) {
  let length = candies.length/2 //平均分后的数组长度
  let getLength = 0 // 
  let candiesArr = new Set([...candies]) // 去重
  if(candiesArr.size<length){ // 如果去重后的长度比平均分的数组小说明最多不同就是Set的长度
    getLength = candiesArr.size
  }else{ // 去重后的长度比平均分后的数组长度大或者相等，都对多为平均分后的数组长度
    getLength = length
  }
  return getLength
};
distributeCandies([1,1,2,3])
// @lc code=end

