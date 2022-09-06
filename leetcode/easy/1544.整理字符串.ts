/*
 * @lc app=leetcode.cn id=1544 lang=typescript
 *
 * [1544] 整理字符串
 */

import { trace } from "console"

// @lc code=start
function makeGood(s: string): string {
  let _target: string[] = [s[0]]
  for(let i = 1;i<s.length;i++){
    
    let curValue = s[i]
    let compareValue = _target.pop() || ''
    if(curValue === compareValue){
      _target.push(compareValue)
      _target.push(curValue)
    }else if(curValue.toUpperCase()===compareValue || curValue.toLowerCase()===compareValue){
   

    }else{
   
      _target.push(compareValue)
      _target.push(curValue)
    }
    // _target.push(s[i])
  }
  return _target.join('')
};
console.log(makeGood('abBAcC'))
// @lc code=end

