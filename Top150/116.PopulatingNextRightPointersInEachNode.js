/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */
/**
 * @param {Node} root
 * @return {Node}
 */
// Recursively
var connect = function(root) {
  if (!root) return null;
  if (root.left) root.left.next = root.right;
  if (root.right) root.right.next = root.next ? root.next.left : null;
  connect(root.left);
  connect(root.right);
  return root;
};

// Iteratively
var connect2 = root => {
  if (!root) return null;
  const queue = [];
  queue.push(root);
  while (queue.length) {
    const size = queue.length;
    for (let i = 0; i < size; i++) {
      const cur = queue.shift();
      if (i < size - 1) {
        cur.next = queue[0];
      } else {
        cur.next = null;
      }
      if (cur.left) queue.push(cur.left);
      if (cur.right) queue.push(cur.right);
    }
  }
  return root;
};
