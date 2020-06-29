/*
 * @lc app=leetcode.cn id=532 lang=javascript
 *
 * [532] 数组中的K-diff数对
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findPairs = function(nums, k) {
  if(k<0) return 0
  let setArr = new Set()
  let saveArr = new Set()
  nums.forEach(item =>{
    if(saveArr.has(item-k)){
      setArr.add(item-k)
    }
    if(saveArr.has(item+k)){
      setArr.add(item)
    }
    saveArr.add(item)
  })
  return setArr.size
  console.log(setArr,saveArr)
};
findPairs([3, 1, 4, 1, 5],2)
// @lc code=end

