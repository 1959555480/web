/*
 * @lc app=leetcode.cn id=1103 lang=javascript
 *
 * [1103] 分糖果 II
 */

// @lc code=start
/**
 * @param {number} candies
 * @param {number} num_people
 * @return {number[]}
 */
var distributeCandies = function (candies, num_people) {
  let arr = Array(num_people).fill(0)
  let index = 0
  while(candies>0){
    arr[index % num_people] += Math.min(candies, index + 1);
    // 计算剩余的糖果
    candies -= (index + 1);
    index++;
  }
  return arr
};
console.log(distributeCandies(10, 3))
// @lc code=end

