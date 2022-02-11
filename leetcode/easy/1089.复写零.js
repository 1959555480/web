/*
 * @lc app=leetcode.cn id=1089 lang=javascript
 *
 * [1089] 复写零
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */
var duplicateZeros = function (arr) {
  let l = arr.length
  for (let i = 0; i < arr.length; i++) {
    if(arr[i]===0){
      arr.splice(i,0,0)
      i+=1
    }
    if(i >= l-1){
      arr.splice(l, arr.length - l)
      break
    }
  }
};
duplicateZeros([1,0,2,3,0,4,5,0])
// @lc code=end

