/*
 * @lc app=leetcode.cn id=1160 lang=typescript
 *
 * [1160] 拼写单词
 */

// @lc code=start
function countCharacters(words: string[], chars: string): number {
  let sum:number = 0
    for (let i = 0; i < words.length; i++) {
    let newC:string = chars
    sum += words[i].length
    for (let j = 0; j < words[i].length; j++) {
      let index:number = newC.indexOf(words[i][j])
      if (index !== -1) {
        newC = newC.replace(words[i][j],'')
      }else{
        // 找不到 剔除这个单词
        sum -= words[i].length
        break
      }
    }
  }
  return sum
};
countCharacters(["cat","bt","hat","tree"],'atach')
// @lc code=end

