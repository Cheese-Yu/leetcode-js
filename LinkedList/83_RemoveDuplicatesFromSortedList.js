// Easy

// Given a sorted linked list, delete all duplicates such that each element appear only once.

// Example 1:

// Input: 1->1->2
// Output: 1->2
// Example 2:

// Input: 1->1->2->3->3
// Output: 1->2->3


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
var deleteDuplicates = function(head, result, pre) {
    if(!head) {
        return head;
    }
    let node = head
    let next = head.next
    while (next !== null) {
        if (next.val !== node.val) {
            node.next = next
            node = next
        }
        next = next.next
    }
    node.next = null
    return head
};