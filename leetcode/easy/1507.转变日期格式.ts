/*
 * @lc app=leetcode.cn id=1507 lang=typescript
 *
 * [1507] 转变日期格式
 */

// @lc code=start
function reformatDate(date: string): string {
  let month = new Map<number,string>(
    [
      [1, "Jan"],
      [2, "Feb"],
      [3, "Mar"],
      [4, "Apr"],
      [5, "May"],
      [6, "Jun"],
      [7, "Jul"],
      [8, "Aug"],
      [9, "Sep"],
      [10, "Oct"],
      [11, "Nov"],
      [12, "Dec"],
    ]
  );

  return date.split(' ').reverse().map((item,index)=>{
    if(index===1){
       for(let [key,value] of month){
        if(value === item){
          if(key<10){
            return '0'+key
          }else{
            return key
          }
        }
       }
    }
    if(index===2){
      return parseInt(item)<10? '0'+parseInt(item):parseInt(item)
    }
    return item
  }).join('-')
}
console.log(reformatDate('6th Jun 1933'))
// @lc code=end
