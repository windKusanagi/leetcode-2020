/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
  if (!head || !head.next) return false;
  const map = new Map();
  map.set(head, true);
  head = head.next;
  while (head) {
    if (map.get(head)) return true;
    map.set(head, true);
    head = head.next;
  }
  return false;
};
