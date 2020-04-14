/*
 * @lc app=leetcode.cn id=107 lang=javascript
 *
 * [107] 二叉树的层次遍历 II
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
 * @return {number[][]}
 */
var levelOrderBottom = function(root) {
  let res = []
  if(root == null) return res

  let queue = []
  let cur = root
  queue.push(root)

  let level = 0
  while(queue.length!==0){
    let len = queue.length
    for(let i = 0; i<len;i++){
      cur = queue.shift();
      res[level].push(cur.val)
      cur.left && queue.push(cur.left)
      cur.right &&  queue.push(cur.right)
    }
    level++
  }
  return res.reverse()
};
// @lc code=end

