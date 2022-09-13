/*
 * @lc app=leetcode.cn id=1576 lang=typescript
 *
 * [1576] 替换所有的问号
 */

// @lc code=start
function modifyString(s: string): string {
  let _sArr = s.split("");
  let _flag = true;
  let all = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z',
  ]
  for (let index = 0; index < _sArr.length; index++) {
    let element = _sArr[index];
    if (index === 0 && element === "?") {
      for (let i = 0; i < 26; i++) {
        let c = String.fromCharCode(97 + i);
        if (c !== _sArr[index + 1]) {
          _sArr[index] = c;
        }
      }
    } else if (index !== 0 && element === "?") {
      for (let i = 0; i < 26; i++) {
        let c = String.fromCharCode(97 + i);
        if (c !== _sArr[index + 1] && c !== _sArr[index - 1]) {
          _sArr[index] = c;
        }
      }
    }
  }
  console.log("sdf", _sArr);
  return _sArr.join("");
}
modifyString("j?qg??b");
// @lc code=end
