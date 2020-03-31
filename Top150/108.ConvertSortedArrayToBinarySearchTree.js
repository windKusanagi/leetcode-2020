/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
  if (!nums || !nums.length) return null;
  return build(0, nums.length - 1, nums);
};

const build = (left, right, nums) => {
  if (ledt > right) return null;
  const mid = ((right - left) / 2) | 0;
  const root = new TreeNode(nums[mid]);
  root.left = build(left, mid - 1, nums);
  root.right = build(mid + 1, right, nums);

  return root;
};

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}