/*
 * @lc app=leetcode.cn id=852 lang=javascript
 *
 * [852] 山脉数组的峰顶索引
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @return {number}
 */
var peakIndexInMountainArray = function (arr) {
  // 二分查找  0 1 2 3 4 5 6 7 8 9
  let left = 0
  let right = arr.length - 1
  while (left <= right) {
    let mid = Math.floor((left + right) / 2)
    if ((arr[mid] > arr[mid + 1]) && (arr[mid] > arr[mid - 1])) return mid
      if (arr[mid] < arr[mid + 1]) {
        left = mid + 1
      } else {
        right = mid - 1
      }
  }
};
console.log(peakIndexInMountainArray([3,4,5,1]))
// @lc code=end

