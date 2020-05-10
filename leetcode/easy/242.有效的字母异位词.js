/*
 * @lc app=leetcode.cn id=242 lang=javascript
 *
 * [242] 有效的字母异位词
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  if (s.length !== t.length) return false
  for (let i = 0; i < s.length; i++){
    // let index = t.indexOf(s[i]) //在第二个字符串中找到
    // t = t.replace(t[index],'') // 删除
    t = t.replace(t[t.indexOf(s[i])],'')
  }
  if(t == ''){
    return true
  }else{
    return false
  }
};
// 方法二使用sort 排序对比
console.log(isAnagram("rat","car"))
// @lc code=end

