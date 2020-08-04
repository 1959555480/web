/*
 * @lc app=leetcode.cn id=746 lang=javascript
 *
 * [746] 使用最小花费爬楼梯
 */

// @lc code=start
/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {
  let dp = [];
  dp[0] = cost[0];
  dp[1] = cost[1];
  for(let i = 2,len = cost.length;i<=len;i++){
      if(i == len){
          dp[i] = Math.min(dp[i-1],dp[i-2]);
      }else{
          dp[i] = Math.min(dp[i-1],dp[i-2])+cost[i];
      }
  }
  return dp[cost.length]
};
// @lc code=end

