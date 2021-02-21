/*
 * @lc app=leetcode.cn id=811 lang=javascript
 *
 * [811] 子域名访问计数
 */

// @lc code=start
/**
 * @param {string[]} cpdomains
 * @return {string[]}
 */
var subdomainVisits = function (cpdomains) {
  let obj = new Map()
  for (let i = 0; i < cpdomains.length; i++) {
    let count = 0
    let str = ''
    count = +cpdomains[i].split(' ')[0]
    str = cpdomains[i].split(' ')[1]
    obj.has(str) ? obj.set(str, obj.get(str) + count) : obj.set(str, count)
    while (str.indexOf('.') > -1) {
      str = str.substr(str.indexOf('.') + 1)
      obj.has(str) ? obj.set(str, obj.get(str) + count) : obj.set(str, count)
    }
  }
  let arr = []
  obj.forEach((value,key,map)=>{
    let str = value + ' ' + key
    arr.push(str)
  })
  return arr
};
// @lc code=end

