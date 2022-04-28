/*
 * @lc app=leetcode.cn id=1417 lang=typescript
 *
 * [1417] 重新格式化字符串
 */

// @lc code=start
function reformat(s: string): string {
  let strArr: any[] = []
  let numArr: any[] = []
  let target: any[] = []
  s.split('').forEach(item => {
    if (isNaN(+item)) {
      strArr.push(item)
    } else {
      numArr.push(item)
    }
  })
  let length:number = strArr.length+numArr.length
  if (Math.abs(strArr.length - numArr.length) > 1) {
    return ''
  }
  let c: boolean = strArr.length > numArr.length  //c true 字符串多  false 数字多
  for (let i = 0; i < length ; i++) {
    if(c){
      if (i % 2 === 0) {
        target.push(strArr.pop())
      } else {
        target.push(numArr.pop())
      }
    }else{
      if (i % 2 === 0) {
        target.push(numArr.pop())
      } else {
        target.push(strArr.pop())
      }
    }
    
  }
  return target.join('')
};
console.log(reformat('c2o0v1i9d'))
// @lc code=end

