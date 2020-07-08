/*
 * @lc app=leetcode.cn id=599 lang=javascript
 *
 * [599] 两个列表的最小索引总和
 */

// @lc code=start
/**
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */
var findRestaurant = function (list1, list2) {
  let commonArr = []
  let sumNum = -1
  for (let i = 0; i < list1.length; i++) {
    let newNum = -1
    let index = list2.findIndex(item => item == list1[i])
    if (index != -1) {
      // 有相同
      // 统计sumNum
      newNum = i + index
      if (sumNum == -1) {
        // 第一次统计
        sumNum = newNum
        commonArr.push(list1[i])
      } else {
        // 非第一次
        // 进行比较
        if(sumNum<newNum){
          // 大于就不要
        }else{
          commonArr.push(list1[i])
        }
      }
    }
  };
  return commonArr
}
  // findRestaurant(["Shogun", "Tapioca Express", "Burger King", "KFC"], ["KFC", "Shogun", "Burger King"])
// @lc code=end

