/*
 * @lc app=leetcode.cn id=859 lang=javascript
 *
 * [859] 亲密字符串
 */

// @lc code=start
/**
 * @param {string} a
 * @param {string} b
 * @return {boolean}
 */
var buddyStrings = function (a, b) {
  // 返回true情况有二   1.ab相同且存在两个重复元素 2.只有两个元素位置不同交换且相等
  if (a.length !== b.length) return false
  let aLength = a.length
  let aa,bb,arr = [],isSame = false
  for (let i = 0; i < aLength; i++) {
    if(a[i]!==b[i]){
      if(aa === undefined){
        aa = a[i]
        bb = b[i]
      }else if(aa === b[i]&&bb===a[i]){
        aa = null
        bb = null
      }else{
        return false
      }
    }else{
      if(arr.indexOf(a[i])===-1){
        arr.push(a[i])
      }else{
        isSame = true
      }
    }
  }

  return aa === null || (aa === undefined && isSame)
};
console.log(buddyStrings('abcd', 'badc'))
// @lc code=end

