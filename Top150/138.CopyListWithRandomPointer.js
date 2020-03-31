/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function(head) {
  const dummy = new Node(-1, null, null);
  let cur = dummy;
  let phead = head;
  const map = new Map();
  while (phead) {
    const cp = new Node(phead.val, null, null);
    cur.next = cp;
    map.set(phead, cp);
    phead = phead.next;
    cur = cur.next;
  }
  cur = dummy.next;
  phead = head;
  while (phead) {
    cur.random = map.get(phead.random);
    cur = cur.next;
    phead = phead.next;
  }
  return dummy.next;
};
