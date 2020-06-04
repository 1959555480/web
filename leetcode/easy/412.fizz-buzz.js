/*
 * @lc app=leetcode.cn id=412 lang=javascript
 *
 * [412] Fizz Buzz
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function (n) {
  let arr = []
  for (let i = 1; i < n + 1; i++) {
    // if((i%3==0)&&(i%5==0)){
    //   arr.push('FizzBuzz')
    // }else if(i%3==0){
    //   arr.push('Fizz')
    // }else if(i%5==0){
    //   arr.push('Buzz')
    // }else{
    //   arr.push(String(i))
    // }
    // 简化
    let str = ''
    str += i % 3 == 0 ? 'Fizz' : ''
    str += i % 5 == 0 ? 'Buzz' : ''
    if (!str) str += i 
    arr.push(str)
  }
  return arr
};
console.log(fizzBuzz(15))
// @lc code=end

