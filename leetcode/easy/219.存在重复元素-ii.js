/*
 * @lc app=leetcode.cn id=219 lang=javascript
 *
 * [219] 存在重复元素 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function (nums, k) {
  // 方法一 维护一个哈希表
  // const set = new Set()
  // for (let i = 0; i < nums.length; i++) {
  //   if (set.has(nums[i])) {
  //     return true
  //   }
  //   set.add(nums[i])
  //   if (set.size > k) {
  //     set.delete(nums[i - k])
  //   }
  // }
  // return false
  // 方法二 使用Map同理
  const map = new Map()
  for (let i = 0; i < nums.length; i++) {
    if(map.has(nums[i])&&(i-map.get(nums[i])<=k)){
      return true
    }else{
      map.set(nums[i],i)
    }
  }
  return false
};
// console.log(containsNearbyDuplicate([1, 2, 3, 1], 3))
// @lc code=end

