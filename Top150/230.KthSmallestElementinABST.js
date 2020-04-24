/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function (root, k) {
  const arr = [];
  let cur = root;
  const sta = [];

  while (true) {
    if (cur) {
      const temp = new TreeNode(cur.val);
      temp.left = cur.left;
      temp.right = cur.right;
      sta.push(temp);
      cur = cur.left;
    } else {
      if (!sta.length) break;
      cur = sta.pop();
      arr.push(cur.val);
      cur = cur.right;
    }
  }

  return arr[k - 1];
};
