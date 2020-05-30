/*
 * @lc app=leetcode.cn id=383 lang=javascript
 *
 * [383] 赎金信
 */

// @lc code=start
/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
  let flag = true;
  const noteArr = ransomNote.split('');
  const magArr = magazine.split('');
  noteArr.some(char=>{
      const index2 = magArr.indexOf(char);
      if( index2 === -1){
          flag = false;
          return true
      }else{
          // 匹配到之后置null，只能用一次
          magArr[index2] = null;
      }
  })
  return flag
};

// @lc code=end

