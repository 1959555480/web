/*
 * @lc app=leetcode.cn id=888 lang=javascript
 *
 * [888] 公平的糖果交换
 */

// @lc code=start
/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number[]}
 */
var fairCandySwap = function (A, B) {
  // 直接算---->超时
  // let sum = A.reduce((sum, cur, index) => sum + cur) + B.reduce((sum, cur, index) => sum + cur)
  // let mid = sum / 2
  // let arr = []

  // try {
  //   A.forEach((item, index) => {
  //     let newArr = JSON.parse(JSON.stringify(A))
  //     newArr.splice(index, 1)
  //     let a = getSum(newArr)
  //     let target = mid - a
  //     arr[0] = item
  //     console.log(`当前元素${item}`,`剔除后总和${a}`, `目标${target}`)
  //     if (B.indexOf(target) != -1) {
  //       arr[1] = target
  //       throw new Error('err')
  //     }
  //   })
  // } catch (error) {
  //   return arr
  // }
  // // 剔除一个元素后总和
  // function getSum(arr) {
  //   if (!arr.length) return 0
  //   return arr.reduce((sum, cur, index) => sum + cur)
  // }


  // 法二 公式代换  sumA−x+y=sumB+x−y
  let sum = (A.reduce((sum, cur, index) => sum + cur) - B.reduce((sum, cur, index) => sum + cur)) / 2
  let arr = []
  try {
    A.forEach((item, index) => {
      let target = item - sum
      arr[0] = item
      if (B.indexOf(target) !== -1) {
        arr[1] = target
        throw new Error('err')
      }
    })
  } catch (error) {
    return arr
  }
};
console.log(fairCandySwap([35, 17, 4, 24, 10], [63, 21]))
// @lc code=end

