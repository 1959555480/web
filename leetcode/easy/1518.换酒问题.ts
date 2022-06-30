/*
 * @lc app=leetcode.cn id=1518 lang=typescript
 *
 * [1518] 换酒问题
 */

// @lc code=start
function numWaterBottles(numBottles: number, numExchange: number): number {
  let count:number = numBottles
  while (Math.floor(numBottles/numExchange)>=1) {
    count+=Math.floor(numBottles/numExchange)
    numBottles = Math.floor(numBottles/numExchange) + numBottles%numExchange
  }
  return count
};
numWaterBottles(15,4)
// @lc code=end

