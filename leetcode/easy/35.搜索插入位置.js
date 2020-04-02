/*
 * @lc app=leetcode.cn id=35 lang=javascript
 *
 * [35] 搜索插入位置
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
//不使用sort 时间更快 空间更少
var searchInsert = function (nums, target) {
  if (nums.indexOf(target) != -1) {
    // 存在
    return nums.indexOf(target)
  } else {
    //不存在
    for (let i = 0; i < nums.length; i++){
      if(nums[i]>target){
        return i
      }
    }
    return nums.length
  }
};

// 使用sort + indexOf
// var searchInsert = function(nums, target) {
//   if(nums.indexOf(target)!=-1){
//     // 存在
//     return nums.indexOf(target)
//   }else{
//     //不存在
//     nums.push(target)
//     nums.sort((a,b)=>{
//       return a-b
//     })
//     let index = nums.indexOf(target)
//     return index
//   }
// };
// @lc code=end

