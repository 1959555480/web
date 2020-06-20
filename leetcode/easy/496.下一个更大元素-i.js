/*
 * @lc app=leetcode.cn id=496 lang=javascript
 *
 * [496] 下一个更大元素 I
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function (nums1, nums2) {
  let arr = []
  for (let i = 0; i < nums1.length; i++) {
    let index = nums2.indexOf(nums1[i])
    for(let j = index;j<nums2.length;j++){
      if(nums2[j]>nums1[i]){
        arr.push(nums2[j])
        break
      }else{  
        if(j == nums2.length-1) {
          arr.push(-1)
        }
      }
    }
  }
  return arr
  console.log(arr)
};
// nextGreaterElement([4,1,2],[1,3,4,2])
// @lc code=end

