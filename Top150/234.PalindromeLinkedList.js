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
var isPalindrome = function (head) {
  let fast = head,
    slow = head;

  while (fast && fast.next) {
    fast = fast.next.next;
    slow = slow.next;
  }

  fast = reverse(slow);
  slow = head;

  while (fast) {
    if (slow.val !== fast.val) return false;
    fast = fast.next;
    slow = slow.next;
  }

  return true;
};

const reverse = (node) => {
  let head;
  let temp;
  while (node) {
    temp = node.next;
    node.next = head;
    head = node;
    node = temp;
  }

  return head;
};
