/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    const dummyHead = new ListNode(0);
    dummyHead.next = head;
    let fast = dummyHead;
    let slow = dummyHead; 

    for ( let i = 0; i <= n  ; i++ ){
        fast = fast.next;
    }

    while(fast) {
        fast = fast.next;
        slow = slow.next;
    }
    
    slow.next = slow.next.next;
    return dummyHead.next;
};

function ListNode(val) {
  this.val = val;
  this.next = null;
}

const L1 = new ListNode(1);
const L2 = new ListNode(2); 
const L3 = new ListNode(3);
const L4 = new ListNode(4);
const L5 = new ListNode(5);

L1.next = L2;
L2.next = L3;
L3.next = L4;
L4.next = L5;

// console.log(removeNthFromEnd(L1, 2));
// console.log(removeNthFromEnd(L1, 4));
console.log(removeNthFromEnd(L1, 5));