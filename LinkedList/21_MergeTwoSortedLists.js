// Easy

// Merge two sorted linked lists and return it as a new list. The new list should be made by splicing together the nodes of the first two lists.

// Example:

// Input: 1->2->4, 1->3->4
// Output: 1->1->2->3->4->4


/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
    let l3 = null;
    let arr = [];

    let getVaue = function (l1, l2) {
        l1 ? arr.push(l1.val) : l1 = {next: null};
        l2 ? arr.push(l2.val) : l2 = {next: null};
        if (l1.next || l2.next) {
            getVaue(l1.next, l2.next);
        }
    }
    getVaue(l1, l2);
    arr.sort((a,b)=>a-b);
    for (let i = arr.length - 1; i >= 0; i--) {
        l3 = {val: arr[i], next: l3};
    }
    return l3 ? l3 : null;
};