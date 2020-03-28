/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
  if (!preorder || !inorder || !preorder.length || !inorder.length) return null;
  const root = build(0, 0, inorder.length - 1, preorder, inorder);
  return root;
};

const build = (preStart, inStart, inEnd, preorder, inorder) => {
  if (preStart > preorder.length - 1 || inStart > inEnd) return null;
  const root = new TreeNode(preorder[preStart]);
  const rootIdx = inorder.indexOf(preorder[preStart]);
  root.left = build(preStart + 1, inStart, rootIdx - 1, preorder, inorder);
  root.right = build(
    preStart + rootIdx - inStart + 1,
    rootIdx + 1,
    inEnd,
    preorder,
    inorder
  );

  return root;
};

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

const t = buildTree([3, 9, 20, 15, 7], [9, 3, 15, 20, 7]);

console.log(t);
