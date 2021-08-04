/*
 * @lc app=leetcode.cn id=944 lang=javascript
 *
 * [944] 删列造序
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {number}
 */
var minDeletionSize = function(strs) {
  let count = 0
  for(let i = 0;i<strs[0].length;i++){
    let arr = []
    for(let j = 0;j<strs.length;j++){
      // 存进数组
      arr.push(strs[j][i]) 
    }
    if(arr.join('')!==arr.sort().join('')) count++
  }
  return count
};
console.log(minDeletionSize(["zyx","wvu","tsr"]))
// @lc code=end

