/*
 * @lc app=leetcode.cn id=929 lang=javascript
 *
 * [929] 独特的电子邮件地址
 */

// @lc code=start
/**
 * @param {string[]} emails
 * @return {number}
 */
var numUniqueEmails = function(emails) {
  let arr = emails 
  let targetArr = []
  for(let i = 0;i<arr.length;i++){
    let target = arr[i].split('@')[0]
    let end = arr[i].split('@')[1]
    if(target.indexOf('.')!==-1 ){
      target = target.replace(/\./g,'')
    }
    if(target.indexOf('+')!==-1){
      let index = target.indexOf('+')
      target = target.substring(0,index)
    }
    targetArr.push([target,end].join('@'))
  }
  return new Set(targetArr).size

};
numUniqueEmails(["test.email+alex@leetcode.com","test.e.mail+bob.cathy@leetcode.com","testemail+david@lee.tcode.com"])
// @lc code=end

