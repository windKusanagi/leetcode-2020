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
var isSymmetric = function(root) {
  if (!root) return true;
  return symmetric(root.left, root.right);
};

const symmetric = (left, right) => {
  if (!left && !right) return true;
  if ((left && !right) || (!left && right) || left.val !== right.val)
    return false;
  return symmetric(left.left, right.right) && symmetric(left.right, right.left);
};
