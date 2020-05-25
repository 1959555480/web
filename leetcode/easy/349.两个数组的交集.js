/*
 * @lc app=leetcode.cn id=349 lang=javascript
 *
 * [349] 两个数组的交集
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
  let c = []
  nums1.forEach(item=>{
    if(nums2.indexOf(item)!=-1){
      c.push(item)
    }
  })
  c = [...new Set(c)]
  return c
};
// intersection([1,2,2,1],[2,2])
// @lc code=end

