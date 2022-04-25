/*
 * @lc app=leetcode.cn id=1385 lang=typescript
 *
 * [1385] 两个数组间的距离值
 */

// @lc code=start
function findTheDistanceValue(arr1: number[], arr2: number[], d: number): number {
  let target: number = arr1.length
  for(let i =0;i<arr1.length;i++){
    for(let j =0;j<arr2.length;j++){
      let num = Math.abs(arr1[i]-arr2[j])
      console.log(`${i}---${num}`)
      if(num<=d) {
        target--
        break
      }
    }
  }
  return target
};
console.log(findTheDistanceValue([1,4,2,3],[-4,-3,6,10,20,30],3))
// @lc code=end

