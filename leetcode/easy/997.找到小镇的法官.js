/*
 * @lc app=leetcode.cn id=997 lang=javascript
 *
 * [997] 找到小镇的法官
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number[][]} trust
 * @return {number}
 */
var findJudge = function (n, trust) {
  if(!trust.length){
    if(n===1){
      return n
    }else{
      return -1
    }
  }
  // 找到所有在尾数后的人
  let maybeArr = []
  trust.forEach((i, index) => {
    maybeArr.push(i[1])
  })
  // 找到所有在尾数前的人
  let unableArr = []
  trust.forEach((i, index) => {
    unableArr.push(i[0])
  })
  // 统计最多的
  let target = new Map()
  for (let i = 0; i < maybeArr.length; i++) {
    if (!target.get(maybeArr[i])) {
      target.set(maybeArr[i], 1)
    } else {
      target.set(maybeArr[i], target.get(maybeArr[i]) + 1)
    }
  }
  let max = Math.max(...Array.from(target.values()))
  // 判断
  if (max = n - 1) {
    // 符合
    for (let [key, value] of target.entries()) {
      if (value === max){
        if(unableArr.indexOf(key)!==-1){
          return -1
        }
        return key
      }else{
        return -1
      }
        
    }
  } else {
    return -1
  }
};
console.log(findJudge(3, [[1,3],[2,3],[3,1]]))
// @lc code=end

