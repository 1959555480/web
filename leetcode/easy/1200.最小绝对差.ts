/*
 * @lc app=leetcode.cn id=1200 lang=typescript
 *
 * [1200] 最小绝对差
 */

// @lc code=start
function minimumAbsDifference(arr: number[]):number[][] {
// 双指针
  let sortArr = arr.sort((a,b)=>a-b)
  let left = 0 ,right = 1,min=1000000,targetArr:number[][] = []
  while(right<=sortArr.length-1){
    let target = sortArr[right] - sortArr[left]
    if(target<min){
      targetArr = []
      targetArr.push([sortArr[left],sortArr[right]])
      min = target
    }else if(target===min) {
      targetArr.push([sortArr[left],sortArr[right]])
    }
    left ++ 
    right ++
  }
  return targetArr
};
minimumAbsDifference([3,8,-10,23,19,-4,-14,27])
// @lc code=end

