/*
 * @lc app=leetcode.cn id=720 lang=javascript
 *
 * [720] 词典中最长的单词
 */

// @lc code=start
/**
 * @param {string[]} words
 * @return {string}
 */
var longestWord = function(words) {
  const set = new Set(words);
  let res = ''
  for(let word of words) {
      //剪枝
      if(word.length < res.length || (word.length === res.length && word > res)) continue
      let bool = true;
      for(let i = 1; i < word.length; i++) {
          if(!set.has(word.substring(0, i))) bool = false
      }
      if(bool) res = word
  }
  return res;
};
// @lc code=end

