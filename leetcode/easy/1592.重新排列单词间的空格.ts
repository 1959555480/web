/*
 * @lc app=leetcode.cn id=1592 lang=typescript
 *
 * [1592] 重新排列单词间的空格
 */

// @lc code=start
function reorderSpaces(text: string): string {
  // 空格数
  let _targetArr = text.split('')
  let _space = _targetArr.filter(item=>item === ' ')

  // 单词
  let _target:any[] = text.split(' ').filter(item=>item!=='')

  if(_target.length === 1){
    return _target.join('') + _space.join('')
  }

  // 计算
  let midN = 0
  let endN = 0
  midN = Math.floor(_space.length / (_target.length - 1 ))
  if(_space.length % (_target.length - 1 ) !== 0){
    endN = _space.length % (_target.length - 1 )
  }
  let _minS:any[] = []
  let _endS:any[] = []
  for(let i = 0;i<midN;i++){
    _minS.push(' ')
  }
  for(let i = 0;i<endN;i++){
    _endS.push(' ')
  }
  for(let i = 0;i<_target.length;i++){
    if(i!==_target.length-1){
      _target[i] += _minS.join('')
    }else{
      _target[i] += _endS.join('')
    }
  }
  return _target.join("")
};
console.log(reorderSpaces('  hello'))
// @lc code=end

