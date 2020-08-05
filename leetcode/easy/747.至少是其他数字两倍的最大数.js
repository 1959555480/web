/*
 * @lc app=leetcode.cn id=747 lang=javascript
 *
 * [747] 至少是其他数字两倍的最大数
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var dominantIndex = function(nums) {
    // 获取最大值
    const max = Math.max(...nums)
    // 过滤掉该最大数
    const arr = nums.filter(item =>item !== max)
    // 判断
    for(let i=0;i<arr.length;i++){
        if(arr[i] * 2 > max){
            return -1
        }
    }
    return nums.indexOf(max)
};
// @lc code=end

