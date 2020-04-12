/*
 * @lc app=leetcode.cn id=101 lang=javascript
 *
 * [101] 对称二叉树
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
// let root = {
//   val: 1,
//   left: {
//     val: 2,
//     left: { val: 3, left: null, right: null, },
//     right: { val: 4, left: null, right: null, },
//   },
//   right: {
//     val: 2,
//     left: { val: 4, left: null, right: null, },
//     right: { val: 3, left: null, right: null, }
//   },
// }
var isSymmetric = function (root) {
  if (root==null) {
    return true
  }else{
    return check(root.left, root.right)
  }
};
// 用于比较两颗二叉树是否相等
function check(left, right) {
  if (left == null && right == null) {
    return true//两个都是空 对此
  }
  if (left === null || right === null) {//一空一非空 肯定不对称
    return false
  }
  if (left.val == right.val) {//最后看值是否相等
    //相等 继续递归
    return check(left.left, right.right) && check(left.right, right.left)
  }else{
    return false
  }
}
// console.log(isSymmetric([]))
// @lc code=end

