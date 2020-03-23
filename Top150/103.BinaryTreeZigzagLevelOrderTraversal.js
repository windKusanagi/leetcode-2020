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
var zigzagLevelOrder = function(root) {
  if (!root) return [];
  const res = [];
  let flag = false;
  const queue = [];
  queue.push(root);
  while (queue.length) {
    const size = queue.length;
    const temp = [];
    for (let i = 0; i < size; i++) {
      const cur = queue.shift();
      temp.push(cur.val);
      cur.left && queue.push(cur.left);
      cur.right && queue.push(cur.right);
    }
    flag && temp.reverse();
    res.push(temp);
    flag = !flag;
  }
  return res;
};