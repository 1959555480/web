/*
 * @lc app=leetcode.cn id=1422 lang=typescript
 *
 * [1422] 分割字符串的最大得分
 */

// @lc code=start
function maxScore(s: string): number {
  let sArr: string[] = s.split('')
  let target: number = 0
  for (let i = 1; i < s.length; i++) {
    let left = s.substring(0,i)
    let right = s.substring(i,s.length)
    // 计算
    let leftSum = left.split('').sort().lastIndexOf('0')  
    let rightSum = right.split('').sort().indexOf('1')
    leftSum = leftSum!==-1?leftSum+1:0
    rightSum = rightSum!==-1?right.length-rightSum:0
    if(target<leftSum+rightSum){
      target = leftSum+rightSum
    }
  }
  return target
};
console.log(maxScore('00111'))
// @lc code=end

