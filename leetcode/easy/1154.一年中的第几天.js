/*
 * @lc app=leetcode.cn id=1154 lang=javascript
 *
 * [1154] 一年中的第几天
 */

// @lc code=start
/**
 * @param {string} date
 * @return {number}
 */
var dayOfYear = function(date) {
  const currentYear = new Date(date).getFullYear().toString();
  // 今天减今年的第一天（xxxx年01月01日）
  const hasTimestamp = new Date(date) - new Date(currentYear);
  // 86400000 = 24 * 60 * 60 * 1000
  const hasDays = Math.ceil(hasTimestamp / 86400000) + 1;
  console.log('今天是%s年中的第%s天', currentYear, hasDays);
  return hasDays
  // 结果：今天是2018年的第329天
};
dayOfYear('2019-02-10')
// @lc code=end

