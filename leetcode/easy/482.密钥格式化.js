/*
 * @lc app=leetcode.cn id=482 lang=javascript
 *
 * [482] 密钥格式化
 */

// @lc code=start
/**
 * @param {string} S
 * @param {number} K
 * @return {string}
 */
var licenseKeyFormatting = function(S, K) {
  const res  = []
  const str = S.toUpperCase().split('-').join("").split("").reverse().join("")
  let index = 0
  for(let i = 0, len = str.length; i < len; i ++) {
      if(len - index <= K ){
          const temp = str.slice(i).split("").reverse().join("")
          res.unshift(temp)
          break
      }
      if((i + 1) % K === 0){
          const temp = str.slice(i + 1 - K, i + 1).split("").reverse().join("")
          res.unshift(temp)
          index = i
      }
  }
  return res.join('-')
};
licenseKeyFormatting("2-4A0r7-4k", 4)
// licenseKeyFormatting("2-5g-3-J",2)
// @lc code=end

