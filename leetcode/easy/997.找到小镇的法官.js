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
  console.log("不可能：",unableArr)
  console.log("可能：",maybeArr)
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
  console.log("出现最多的",max)
  // 判断
  if (max = n - 1) {
    // 符合
    for (let [key, value] of target.entries()) {
      if (value === max){
        // 根据value 获取 key
        if(unableArr.indexOf(key)!==-1){
          return -1
        }
        return key
      }  
    }
  } else {
    return -1
  }
  return -1
};
console.log(findJudge(4, [[1,2],[1,3],[2,1],[2,3],[1,4],[4,3],[4,1]]))
// @lc code=end

