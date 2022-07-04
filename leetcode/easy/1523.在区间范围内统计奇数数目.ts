/*
 * @lc app=leetcode.cn id=1523 lang=typescript
 *
 * [1523] 在区间范围内统计奇数数目
 */

// @lc code=start
function countOdds(low: number, high: number): number {
return  Math.floor((high+1)/2)-((low)/2)
};
console.log(countOdds(8,10))
// @lc code=end

