/*
 * @lc app=leetcode.cn id=1399 lang=typescript
 *
 * [1399] 统计最大组的数目
 */

// @lc code=start
function countLargestGroup(n: number): number {
  let mapN = new Map()
  for(let i=1;i<n+1;i++){
    const res =  [...String(i)].reduce((sum,cur)=>{
      return sum = Number(sum) + Number(cur)
    },0)
    mapN.has(res)?mapN.set(res,mapN.get(res)+1):mapN.set(res,1)
  }
  console.log("a",mapN)
  return [...mapN.values()].filter(item=>{
    return item === Math.max(...mapN.values())
  }).length
};
console.log(countLargestGroup(2))
// @lc code=end

