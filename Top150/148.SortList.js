/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var sortList = function(head) {
  if (!head || !head.next) return head;
  let fast = head,
    slow = head,
    preSlow = null;
  while (fast && fast.next) {
    preSlow = slow;
    slow = slow.next;
    fast = fast.next.next;
  }
  preSlow.next = null;
  return merge(sortList(head), sortList(slow));
};

const merge = (l1, l2) => {
  const dummy = new ListNode(0);
  let cur = dummy;
  while (l1 && l2) {
    if (l1.val > l2.val) {
      cur.next = new ListNode(l2.val);
      l2 = l2.next;
    } else {
      cur.next = new ListNode(l1.val);
      l1 = l1.next;
    }
    cur = cur.next;
  }
  if (l1) cur.next = l1;
  if (l2) cur.next = l2;
  return dummy.next;
};
