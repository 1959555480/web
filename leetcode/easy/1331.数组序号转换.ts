/*
 * @lc app=leetcode.cn id=1331 lang=typescript
 *
 * [1331] 数组序号转换
 */

// @lc code=start
function arrayRankTransform(arr: number[]): number[] {
  let sort = [...new Set(arr.slice(0).sort((a, b) => a - b))]
  let targetMap = new Map()
  sort.forEach((item,index)=>{
    if(!targetMap.has(item)){
      targetMap.set(item,index+1)
    }
  })
  let nn: number[] = []
  for (let j = 0; j < arr.length; j++) {
    nn.push(targetMap.get(arr[j]))
  }
  return nn
};
console.log(arrayRankTransform([2, -11, 24, 15, 26, -31, -48, -49, 22, 37, -36]))
// @lc code=end

