/*
 * @lc app=leetcode.cn id=1018 lang=javascript
 *
 * [1018] 可被 5 整除的二进制前缀
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean[]}
 */
var prefixesDivBy5 = function (nums) {
  const answer = [];
  let prefix = 0;
  const length = nums.length;
  for (let i = 0; i < length; i++) {
    prefix = ((prefix << 1) + nums[i]) % 5;
    console.log("ss",(prefix << 1))
    answer.push(prefix === 0);
  }
  return answer;
};
console.log(prefixesDivBy5([1, 1, 1]))
// @lc code=end

