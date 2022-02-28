/*
 * @lc app=leetcode.cn id=1189 lang=typescript
 *
 * [1189] “气球” 的最大数量
 */

// @lc code=start
function maxNumberOfBalloons(text: string): number {
  // 判断
  const countMap = new Map<string, number>([
    ['b', 0],
    ['a', 0],
    ['l', 0],
    ['o', 0],
    ['n', 0],
  ]);

  for (let i = 0; i < text.length; i++) {

    let curWord:any = countMap.get(text[i])
    if(curWord>=0){
      if (text[i] === 'l'|| text[i]==='o') {
        countMap.set(text[i],curWord +=0.5)
      }else{
        countMap.set(text[i],curWord +=1)
      }
    }
  }
  let arr:number[] = [...countMap.values()]
  return Math.floor(Math.min(...arr))
};
maxNumberOfBalloons('balon')
// @lc code=end

