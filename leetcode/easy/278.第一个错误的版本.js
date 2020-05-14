/*
 * @lc app=leetcode.cn id=278 lang=javascript
 *
 * [278] 第一个错误的版本
 */

// @lc code=start
/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function (isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function (n) {
        let left = 1
        let right = n
        let averageNum // 中间值
        while (left < right) {
            averageNum = Math.floor((left + right) / 2)
            if(isBadVersion(averageNum)){
                right = averageNum 
            }else{
                left = averageNum + 1
            }
        }
        return right //left right都一样 因为最后比对2个的时候，都会进行比对，如eg:1 2 
        // 1为true时 left=1 right=1 
        // 1为false时 left=2 right=2 
         /**
         * left right averageNum
         * 1 5 3
         * 4 5 4
         * 5 5 5
         * 2
         */

        // let left = 0
        // let right = n
        // let averageNum = Math.floor(n / 2)
        // while (averageNum > 0) {
        //     if (isBadVersion(averageNum) == false){// 如果是false 说明前面都是失败的
        //         left = averageNum// 重置左边为当前位置 右边还是为n
        //         averageNum = Math.floor((right+left)/2)// 继续除于2 递归
        //     }else{// 如果为true 说明右边全为true 
        //         // left = 
        //         right = averageNum //重置右边为当前位置
        //     }
        // 5 4 4
        // }
        // isBadVersion(n)
    };
};
// @lc code=end

