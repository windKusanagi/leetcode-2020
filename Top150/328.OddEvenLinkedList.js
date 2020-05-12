/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var oddEvenList = function(head) {
  if(!head) return null;
  let pre = head, cur = head.next, temp;
  while(cur && cur.next) {
    temp = pre.next;
    pre.next = cur.next;
    cur.next = cur.next.next;
    pre.next.next = temp;
    pre = pre.next;
    cur = cur.next;
  }

  return head;
};


//  pre   cur
//  n1    n2   n3   n4
//  n1    n3   n2   n4