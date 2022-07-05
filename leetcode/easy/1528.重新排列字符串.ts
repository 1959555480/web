/*
 * @lc app=leetcode.cn id=1528 lang=typescript
 *
 * [1528] 重新排列字符串
 */

// @lc code=start
function restoreString(s: string, indices: number[]): string {
  let target:string[] = []
  let mapp = new Map<number,string>()
  for(let i = 0;i<s.length;i++){
    mapp.set(indices[i],s[i])
  }
  let arr = Array.from(mapp).sort((a,b)=>{
    return a[0]-b[0]
  })
  return arr.map(item=>item[1]).join('')
};
console.log(restoreString('codeleet',[4,5,6,7,0,2,1,3]))
// @lc code=end

