/*
 * @lc app=leetcode.cn id=1491 lang=typescript
 *
 * [1491] 去掉最低工资和最高工资后的工资平均值
 */

// @lc code=start
function average(salary: number[]): number {
  return salary.sort((a,b)=>a-b).reduce((sum,cur,index,arr)=>{
    if(index>0&&index<arr.length-1){
      return sum+=cur
    }
    return sum
    
  },0) / (salary.length-2)
};
console.log(average([1000,2000,3000]))
// @lc code=end

