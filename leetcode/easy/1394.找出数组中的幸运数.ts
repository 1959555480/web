/*
 * @lc app=leetcode.cn id=1394 lang=typescript
 *
 * [1394] 找出数组中的幸运数
 */

// @lc code=start
function findLucky(arr: number[]): number {
  let target: number = -1
  let nMap = new Map()
  arr.map(item => {
    // 是否存在
    if (nMap.get(item)) {
      nMap.set(item, nMap.get(item) + 1)
    } else {
      nMap.set(item, 1)
    }
  })
  console.log("s", nMap)

  for (let [key, value] of nMap) {
    if (key === value && value > target) {
      target = key
    }
  }
  return target
};
console.log(findLucky([4, 3, 2, 2, 4, 1, 3, 4, 3]))
// @lc code=end

