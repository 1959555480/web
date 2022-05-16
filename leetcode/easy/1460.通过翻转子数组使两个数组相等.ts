/*
 * @lc app=leetcode.cn id=1460 lang=typescript
 *
 * [1460] 通过翻转子数组使两个数组相等
 */

// @lc code=start
function canBeEqual(target: number[], arr: number[]): boolean {
  const target1 = target.sort()
  const target2 = arr.sort()
  let tt:boolean = true
  target1.map((item,index)=>{
    if(item!==target2[index]){
      tt = false
    }
  })
  return tt
};
console.log(canBeEqual([1,2,3,4],[2,4,1,3]))
// @lc code=end

