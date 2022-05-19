/*
 * @lc app=leetcode.cn id=1475 lang=typescript
 *
 * [1475] 商品折扣后的最终价格
 */

// @lc code=start
function finalPrices(prices: number[]): number[] {
  let c = prices.reduce((sum,cur,index,arr)=>{
    let target = cur

    for(let i = index+1;i<arr.length;i++){
      if(arr[i]<=cur){
        target = cur - arr[i]
        sum.push(target)
        return sum
      }
    }
    sum.push(target)
    return sum
  },<any[]>[])
  return c
}
console.log('f',finalPrices([8,7,4,2,8,1,7,7,10,1]))
// @lc code=end

