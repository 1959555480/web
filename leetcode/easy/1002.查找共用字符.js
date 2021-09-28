/*
 * @lc app=leetcode.cn id=1002 lang=javascript
 *
 * [1002] 查找共用字符
 */

// @lc code=start
/**
 * @param {string[]} words
 * @return {string[]}
 */
var commonChars = function (A) {

  // 法一超时
  // let sourseArr = words
  // let target = []
  // // 获取最短字符串长度
  // let arr = []
  // sourseArr.forEach(item=>arr.push(item.length))
  // let leng = Math.min(...arr)
  // // 拿到最短字符串
  // let sourseStr = sourseArr.filter(item=>item.length===leng)[0]
  // // 需要遍历的目标数组
  // let targetArr = sourseArr.filter(item=>item!==sourseStr)
  // // 遍历查找
  // for(let i=0;i<leng;){
  //   console.log("targetArr",targetArr)
  //   let str = sourseStr[i]
  //   for(let j = 0;j<targetArr.length;){
  //     let index = targetArr[j].indexOf(str)
  //     if(index!==-1){
  //       // 找到
  //       targetArr[j] = targetArr[j].replace(str,'&')
  //       if(j===targetArr.length-1){
  //         // 所有目标数组都有该字符串 符合条件 push后删除
  //         target.push(str)
  //         i++
  //         break
  //       }else{
  //         j++
  //       }
  //     }else{
  //       // 找不到
  //       i++
  //       break
  //     }
  //   }
  // }
  // return target

  // 法二
  let ans = [], word = A[0], slen = word.length
  for (let s of word) {
    if (A.every(m => m.includes(s))) {
      A = A.map(m => m.replace(s, ''))
      ans.push(s)
    }
  }
  return ans
};
commonChars(["cool", "lock", "cook"])
// @lc code=end

