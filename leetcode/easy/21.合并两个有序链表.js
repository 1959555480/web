/*
 * @lc app=leetcode.cn id=21 lang=javascript
 *
 * [21] 合并两个有序链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function (l1, l2) {
  var mergedHead = {
    name: 'head',
    val: -1,
    next: null
  }
  var cur = mergedHead
  while (l1 && l2) {
    if (l1.val > l2.val) {
      cur.next = l2
      l2 = l2.next
    } else {
      cur.next = l1
      l1 = l1.next
    }
    cur = cur.next
  }
  cur.next = l1 || l2
  return mergedHead.next;
};
console.log(
  mergeTwoLists(
    {
      val: 1,
      next: {
        val: 2,
        next: {
          val: 4,
          next: null
        }
      }
    },
    {
      val: 1,
      next: {
        val: 3,
        next: {
          val: 4,
          next: null
        }
      }
    },
  )
)
// @lc code=end
