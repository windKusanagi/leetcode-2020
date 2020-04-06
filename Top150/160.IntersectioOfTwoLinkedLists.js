/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
  if (!headA || !headB) return null;
  const arr = [];
  while (headA) {
    const temp = headA;
    arr.push(temp);
    headA = headA.next;
  }

  while (headB) {
    const idx = arr.indexOf(headB);
    if (idx >= 0) {
      return arr[idx];
    }
    headB = headB.next;
  }

  return null;
};
