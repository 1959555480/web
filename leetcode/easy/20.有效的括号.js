/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  var bracketsJson = {
    '}': "{",
    ']': "[",
    ')': "("
  }
  if(s.length%2!=0){
    return false
  }
  for (let i = 0; i < s.length; i++){
    let arr = []
    let nowString = s.charAt(i)
    if(nowString in bracketsJson){
      // 属于结束的右边符号  拿arr最后一个符号对比 是否属于一对
      let el = arr.pop()//存起来的左符号的最后一个
      console.log("123",arr,nowString,el,bracketsJson[nowString])
      if(el!=bracketsJson[nowString]){
        console.log("不成立")
        return false
      }else{
        console.log("成立")
        return true
      }
    }else{
      // 属于开始的左边符号  存起来到arr里
      arr.push(nowString)
    }
  }
};
console.log(isValid("{[]}"))
// @lc code=end

// c      stack        template
//"("      ["("]        
//")"                    "("

//"([)]"
// c      stack        template
//"("      ["("]
//"["      ["(","["]
//")"      ["("]           "["

//"{[]}"
// c      stack        template
//"{"      ["{"]
//"["      ["{","["]
//"]"      ["{"]           "["
//"}"                      "{"