/*
 * @lc app=leetcode.cn id=680 lang=javascript
 *
 * [680] 验证回文字符串 Ⅱ
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function (s,flag = true) {
  let l = 0, r = s.length - 1;
  while (l < r && s[l] === s[r]) l++, r--;
  if (r <= l) return true;
  // 删除一个头 或者一个尾
  if (flag == true) return validPalindrome(s.slice(l, r), false) || validPalindrome(s.slice(l + 1, r + 1), false)
  return false;
};
validPalindrome("abcddfba")
// @lc code=end

