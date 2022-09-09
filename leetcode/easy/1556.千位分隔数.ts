/*
 * @lc app=leetcode.cn id=1556 lang=typescript
 *
 * [1556] 千位分隔数
 */

// @lc code=start
function thousandSeparator(n: number): string {
  // let _targetN = Math.floor((n+'').length/3) -1 + ((n+'').length%3===0?0:1)
  // console.log('_',_targetN)
  // for(let i = 0;)
  let c = 0 
  let target:string[] = []
  let _str:any[] = (n +'').split('')
  while(_str.length>0){
    if(c === 3){
      c =0
      target.push('.')
    }else{
      c++
      target.push(_str.pop())
    }
  }
  return target.reverse().join('')
};
thousandSeparator(987)
// @lc code=end

