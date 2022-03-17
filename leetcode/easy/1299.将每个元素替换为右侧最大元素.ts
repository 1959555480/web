/*
 * @lc app=leetcode.cn id=1299 lang=typescript
 *
 * [1299] 将每个元素替换为右侧最大元素
 */

// @lc code=start
function replaceElements(arr: number[]): number[] {
  let newArr = arr.slice(0)
  let nearr=  arr.map((item,index)=>{
    item = Math.max(...[...newArr.slice(index+1,arr.length)])
    return item
  })
  nearr[nearr.length-1] = -1
  return nearr
};
replaceElements([17,18,5,4,6,1])
// @lc code=end

