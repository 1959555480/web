/*
 * @lc app=leetcode.cn id=1512 lang=typescript
 *
 * [1512] 好数对的数目
 */

// @lc code=start
function numIdenticalPairs(nums: number[]): number {
  let count:number = 0
  let map = new Map<number,number>()
  for(let i = 0;i<nums.length;i++){
    let target = map.get(nums[i])
    if(!target){
      map.set(nums[i],1)
    }else{
      map.set(nums[i],target+1)
    }
  }
  for(let [key,value] of map){
    if(value>=2){
      count+= (value * (value -1)) /2
    }
    console.log('拍啊',count)
  }

return count
};
numIdenticalPairs([1,1,1,1])
// @lc code=end

