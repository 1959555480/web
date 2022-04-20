/*
 * @lc app=leetcode.cn id=1380 lang=typescript
 *
 * [1380] 矩阵中的幸运数
 */

// @lc code=start
function luckyNumbers (matrix: number[][]): number[] {
  let targetArr:number[] = []
  // 找出所有列最小值
  let sortX:number[] = []
  for(let i = 0;i<matrix[0].length;i++){
    let sort = matrix.slice(0).reduce((sum,cur,index)=>
    {
      sum.push(cur[i])
      return sum
    },[]).sort((a,b)=>b-a)
    sortX.push(sort[0])
  }

  console.log('so',sortX)
  for(let i = 0;i<matrix.length;i++){
    for(let j = 0;j<matrix[i].length;j++){
      let target = matrix[i][j]
      let sortY = matrix[i].slice(0).sort((a,b)=>a-b)[0] //同一行最小 sortY[0]
      console.log('so',sortY,j)
      if(target===sortX[j]&&target===sortY){
        targetArr.push(target)
        break
      }
    }
  }
  return targetArr
};
console.log(luckyNumbers([[1,10,4,2],[9,3,8,7],[15,16,17,12]]))
// @lc code=end

