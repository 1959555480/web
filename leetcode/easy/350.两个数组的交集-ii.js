/*
 * @lc app=leetcode.cn id=350 lang=javascript
 *
 * [350] 两个数组的交集 II
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
  let c = []
  nums1.forEach(item=>{
    for(let i = 0; i<nums2.length; i++){
      if(item == nums2[i]){
        c.push(item) // 找到就保存下来
        nums2[i] = null //把找到覆盖掉防止重复
        return //找到一个就跳出循环
      }
    }
  })
  return c
  // console.log(c)
};
// intersect([4,9,5],[9,4,9,8,4])
// @lc code=end

