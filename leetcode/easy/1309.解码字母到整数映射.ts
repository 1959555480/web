/*
 * @lc app=leetcode.cn id=1309 lang=typescript
 *
 * [1309] 解码字母到整数映射
 */

// @lc code=start
function freqAlphabets(s: string): string {
  const strMap = {
    'a': '1',
    'b': '2',
    'c': '3',
    'd': '4',
    'e': '5',
    'f': '6',
    'g': '7',
    'h': '8',
    'i': '9',
    'j': '10#',
    'k': '11#',
    'l': '12#',
    'm': '13#',
    'n': '14#',
    'o': '15#',
    'p': '16#',
    'q': '17#',
    'r': '18#',
    's': '19#',
    't': '20#',
    'u': '21#',
    'v': '22#',
    'w': '23#',
    'x': '24#',
    'y': '25#',
    'z': '26#',
  }
  let target: string = s
  target = s.replace(/[0-9][0-9]#/g, (p): string => {
    return Object.entries(strMap).filter(item => item[1] === p).map(item => item[0])[0]
  })
  target = target.replace(/[0-9]/g, (p): string => {
    return Object.entries(strMap).filter(item => item[1] === p).map(item => item[0])[0]
  })
  return target
}
freqAlphabets('10#11#12')
// @lc code=end

