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
var levelOrder = function(root) {
  if (!root) return [];
  const res = [];
  const queue = [];
  queue.push(root);
  while (queue.length) {
    let temp = [];
    const size = queue.length;
    for (let i = 0; i < size; i++) {
      const cur = queue.shift();
      temp.push(cur.val);
      cur.left && queue.push(cur.left);
      cur.right && queue.push(cur.right);
    }
    res.push(temp);
  }
  return res;
};
