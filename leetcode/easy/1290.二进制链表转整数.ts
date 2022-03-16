/*
 * @lc app=leetcode.cn id=1290 lang=typescript
 *
 * [1290] 二进制链表转整数
 */

// @lc code=start

// Definition for singly-linked list.
function getDecimalValue(head: any): number {
  let res = 0;
  while (head) {
    res = res * 2 + head.val;
    head = head.next;
  }
  return res;
};
// getDecimalValue([1,0,1])
// @lc code=end

