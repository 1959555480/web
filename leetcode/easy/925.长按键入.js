/*
 * @lc app=leetcode.cn id=925 lang=javascript
 *
 * [925] 长按键入
 */

// @lc code=start
/**
 * @param {string} name
 * @param {string} typed
 * @return {boolean}
 */
var isLongPressedName = function(name, typed) {
  // 双指针
  let j=0
  for(let i = 0; i<typed.length;){
    if(name[i] === typed[j]){
      i++
      j++
      console.log("相等 我你下一位",i,j)
    }else{
      // 不等情况 
      if(typed[j]===typed[j-1]){
        // 如果是重复继续看下一个
        j++
        console.log("不相等 你下一位",i,j)
      }else{
        // 不等且和前一个不一样直接false
        return false
      }
    }
  }
  if(j<name.length-1) return false
  return true
};
// @lc code=end

