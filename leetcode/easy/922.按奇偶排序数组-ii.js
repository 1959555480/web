/*
 * @lc app=leetcode.cn id=922 lang=javascript
 *
 * [922] 按奇偶排序数组 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParityII = function(nums) {
  let evenArr = []
  let oddArr = []
  nums.map((item,index)=>{
    if(item%2===0){
      evenArr.push(item)
    }else{
      oddArr.push(item)
    }
  })
  for(let i = oddArr.length-1;i>-1;i--){
    oddArr.splice(i,0,evenArr.pop())
  }
  return oddArr
};
sortArrayByParityII([4,2,5,7])
// @lc code=end

