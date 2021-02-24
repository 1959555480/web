/*
 * @lc app=leetcode.cn id=821 lang=javascript
 *
 * [821] 字符的最短距离
 */

// @lc code=start
/**
 * @param {string} s
 * @param {character} c
 * @return {number[]}
 */
var shortestToChar = function (s, c) {
  let target = []
  let result = []
  // 找到所有目标位置
  for (let i = 0; i < s.length; i++) {
    if (s[i] === c) {
      target.push(i)
    }
  }
  // 根据目标和当前元素筛选最小距离数
  function getMix(target, arr) {
    if (!Array.isArray(arr)) return
    arr = arr.reduce((acc, cur, index, arr) => {
      return [...acc,Math.abs(target-cur)]
    },[])
    return Math.min(...arr)
  }
  for (let i = 0; i < s.length; i++) {
    if (s[i] === c) {
      result[i] = 0
    } else {
      result[i] = getMix(i, target)
    }
  }
  return result
};
shortestToChar("loveleetcode", "e")
// @lc code=end

