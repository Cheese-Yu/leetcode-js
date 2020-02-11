// Easy

// Determine whether an integer is a palindrome. An integer is a palindrome when it reads the same backward as forward.

// Example 1:

// Input: 121
// Output: true
// Example 2:

// Input: -121
// Output: false
// Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
// Example 3:

// Input: 10
// Output: false
// Explanation: Reads 01 from right to left. Therefore it is not a palindrome.
// Follow up:

// Coud you solve it without converting the integer to a string?


/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if (x < 0) {
        return false;
    }
    else if (x < 10) {
        return true;
    }
    else {
        let _x = x.toString();
        let mid = Math.floor(_x.length/2);
        let _r = (x / Math.pow(10, mid)).toString().split('.')[1] || '0';
        return _x.substring(0,mid) === _r.split('').reverse().join('');
    }
    
};