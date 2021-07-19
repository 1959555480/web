/*
 * @lc app=leetcode.cn id=937 lang=javascript
 *
 * [937] 重新排列日志文件
 */

// @lc code=start
/**
 * @param {string[]} logs
 * @return {string[]}
 */
var reorderLogFiles = function(logs) {
  // 字母
  let arr1 = [];
  // 数字
  let arr2 = [];
  for(var i of logs) i[i.length-1].match(/\d/)==null?arr1.push(i):arr2.push(i);
  arr1.sort();
  arr1.sort((x,y) =>{
    console.log("1111",x.slice(x.indexOf(' '))>y.slice(y.indexOf(' ')))
      return x.slice(x.indexOf(' ')) < y.slice(y.indexOf(' ')) ? -1:1
  })

  return arr1.concat(arr2);
};
console.log(reorderLogFiles(["dig1 8 1 5 1","let1 art can","dig2 3 6","let2 own kit dig","let3 art zero"]))
// @lc code=end

