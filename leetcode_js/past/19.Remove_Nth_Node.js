
function ListNode(val) {
     this.val = val;
    this.next = null;
}

/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let dummy  = new ListNode(0);
    dummy.next = head;
    let first = dummy;
    let second = dummy;
    for(let i  = 0 ; i<=n; i++) {
        first = first.next;
    }
    while(first!=null) {
        first = first.next;
        second = second.next;
    }
    second.next = second.next.next;
    return dummy.next;

};

let head = new ListNode(1);
console.log(removeNthFromEnd(head,1))