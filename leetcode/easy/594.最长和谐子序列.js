/*
 * @lc app=leetcode.cn id=594 lang=javascript
 *
 * [594] 最长和谐子序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findLHS = function (nums) {
  if (nums.length <= 1) return 0;
  nums.sort((a, b) => a - b);
  var begin = 0, res = 0;
  for (var end = 0; end < nums.length; end++) {
    while (nums[end] - nums[begin] > 1) {
      begin++;
    }
    if (nums[end] - nums[begin] == 1) {
      res = Math.max(res, end - begin + 1)
    }
  }
  return res;
};

// @lc code=end

