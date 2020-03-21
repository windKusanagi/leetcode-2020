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
var isValidBST = function(root) {
  return recur(root, -Infinity, Infinity);
};

const recur = (cur, min, max) => {
  if (!cur) return true;
  if (cur.val <= min || cur.val >= max) return false;
  return recur(cur.left, min, cur.val) && recur(cur.right, cur.val, max);
};
