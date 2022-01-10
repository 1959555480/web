/*
 * @lc app=leetcode.cn id=1051 lang=javascript
 *
 * [1051] 高度检查器
 */

// @lc code=start
/**
 * @param {number[]} heights
 * @return {number}
 */
var heightChecker = function(heights) {
    let origin = heights.slice(0)
    let target = heights.sort((a,b)=>a-b)
    
    let index = 0
    console.log("sss",origin)
    console.log("sss",target)
    origin.forEach((item,i)=>{
      if(item !== target[i]){
        
        index++
      }
    })
    return index
};
console.log(heightChecker([10,6,6,10,10,9,8,8,3,3,8,2,1,5,1,9,5,2,7,4,7,7]))
// @lc code=end

