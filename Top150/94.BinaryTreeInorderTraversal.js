/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function(root) {
  if (!root) return [];
  const res = [];
  const sta = [];
  let cur = root;
  while (true) {
    if (cur !== null) {
      const temp = new TreeNode(cur.val);
      temp.left = cur.left;
      temp.right = cur.right;
      sta.push(temp);
      cur = cur.left;
    } else {
      if (!sta.length) break;
      cur = sta.pop();
      res.push(cur.val);
      cur = cur.right;
    }
  }
  return res;
};

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}
