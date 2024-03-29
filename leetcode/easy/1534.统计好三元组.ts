/*
 * @lc app=leetcode.cn id=1534 lang=typescript
 *
 * [1534] 统计好三元组
 */

// @lc code=start
function countGoodTriplets(
  arr: number[],
  a: number,
  b: number,
  c: number
): number {
  let num: number = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      for (let k = j + 1; k < arr.length; k++) {
        if (
          Math.abs(arr[i] - arr[j]) <= a &&
          Math.abs(arr[j] - arr[k]) <= b &&
          Math.abs(arr[i] - arr[k]) <= c
        ) {
          num++;
        }
      }
    }
  }
  return num;
}
console.log(countGoodTriplets([3, 0, 1, 1, 9, 7], 7, 2, 3));
// @lc code=end
