/*
 * @lc app=leetcode.cn id=1275 lang=typescript
 *
 * [1275] 找出井字棋的获胜者
 */

// @lc code=start
function tictactoe(moves: number[][]): string {
  // 将下的位置转数组 处理所有获胜
  let map:number[][] = [[1,2,3],[4,5,6],[7,8,9],[1,4,7],[2,5,8],[3,6,9],[1,5,9],[3,5,7]]
  // console.log(map)
  // 获取A B 
  let Apeople:number[] = []
  let Bpeople:number[] = []
  for(let i=0;i<moves.length;i++){
    let num = moves[i][0]*3+moves[i][1]+1
    if(i%2===0){
      Apeople.push(num)
    }else{
      Bpeople.push(num)
    }
  }
  console.log("A",Apeople,Bpeople)
  // 遍历处理
  for(let i = 0;i<map.length;i++){
    if(Apeople.indexOf(map[i][0])!==-1 && Apeople.indexOf(map[i][1])!==-1 && Apeople.indexOf(map[i][2])!==-1){
      return 'A'
    }else if(Bpeople.indexOf(map[i][0])!==-1 && Bpeople.indexOf(map[i][1])!==-1 && Bpeople.indexOf(map[i][2])!==-1){
      return  'B'
    }
  }
  if((Apeople.length + Bpeople.length)!==9){
    return 'Pending'
  }else{
    return 'Draw'
  }
};
console.log(tictactoe([[0,0],[1,1],[2,0],[1,0],[1,2],[2,1],[0,1],[0,2],[2,2]]))
// @lc code=end

