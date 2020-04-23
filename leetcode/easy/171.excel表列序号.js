/*
 * @lc app=leetcode.cn id=171 lang=javascript
 *
 * [171] Excel表列序号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var titleToNumber = function (s) {
    let sum = 0, index = 0;
    for (let i = s.length - 1; i >= 0; i--){
        //末位开始算
        let str = s[i] //对应位置的字符  //也可以使用 charAt(i)  返回指定位置上的字符串
        sum += (str.charCodeAt()-64)*(Math.pow(26,index))  
        // console.log("sum",str,(str.charCodeAt()-64),Math.pow(26,index))
        index ++//第一位算1 第二位1*26 第三位 3*26
    }
    return sum
    console.log("num",sum)
};
// titleToNumber("AB")
// @lc code=end

