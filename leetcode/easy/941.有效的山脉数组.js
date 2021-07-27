/*
 * @lc app=leetcode.cn id=941 lang=javascript
 *
 * [941] 有效的山脉数组
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @return {boolean}
 */
var validMountainArray = function(arr) {
  const N = arr.length;
  let i = 0;

  // 递增扫描
  while (i + 1 < N && arr[i] < arr[i + 1]) {
      i++;
  }

  // 最高点不能是数组的第一个位置或最后一个位置
  if (i === 0 || i === N - 1) {
      return false;
  }

  // 递减扫描
  while (i + 1 < N && arr[i] > arr[i + 1]) {
      i++;
  }

  return i === N - 1;
};
console.log(validMountainArray([1,1,1,1,1,1,1,2,1]))
// @lc code=end

