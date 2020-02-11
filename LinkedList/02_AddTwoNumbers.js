// Medium

// You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.

// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

// Example:

// Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
// Output: 7 -> 0 -> 8
// Explanation: 342 + 465 = 807.


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
var addTwoNumbers = function(l1, l2) {
    let l3 = {val: 0, next: null};

    let getVaue = function (l1, l2, l3, t) {
        l1 = l1 ? l1 : l1 = {val: 0, next: null};
        l2 = l2 ? l2 : l2 = {val: 0, next: null};

        let val = l1.val + l2.val + t;
        let _t = val > 9 ? 1 : 0;
        l3.val = val % 10;
        if (l1.next || l2.next || _t === 1) {
            l3.next = {val: 0, next: null}
            getVaue(l1.next, l2.next, l3.next, _t);
        }
        return l3;
    }
    return getVaue(l1, l2, l3, 0);
};