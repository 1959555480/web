/*
 * @lc app=leetcode.cn id=1455 lang=typescript
 *
 * [1455] 检查单词是否为句中其他单词的前缀
 */

// @lc code=start
function isPrefixOfWord(sentence: string, searchWord: string): number {
  for(let i = 0;i<sentence.split(' ').length;i++){
    if(sentence.split(' ')[i].indexOf(searchWord)!==-1&&sentence.split(' ')[i].split(searchWord)[0] === ''){
      return i+1
    }
  }
  return -1
};  
console.log(isPrefixOfWord('i love eating burger','burg'))
// @lc code=end

