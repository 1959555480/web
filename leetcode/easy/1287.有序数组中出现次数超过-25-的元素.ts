/*
 * @lc app=leetcode.cn id=1287 lang=typescript
 *
 * [1287] 有序数组中出现次数超过25%的元素
 */

// @lc code=start
function findSpecialInteger(arr: number[]): number {
  const lengOff:number = arr.length/4
  // 1/4 说明必定再数组1/4处能找到
  for(let i = 0;i<4;i++){
    let target = Math.floor(lengOff*i)
    let number = arr.lastIndexOf(arr[target]) - arr.indexOf(arr[target]) + 1
    if(number>lengOff){
      return arr[target]
    }
  }  
};
console.log(findSpecialInteger([1,2,3,4,5,6,7,8,9,10,11,12,12,12,12]))
// @lc code=end

