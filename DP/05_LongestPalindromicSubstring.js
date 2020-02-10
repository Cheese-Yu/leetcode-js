// Medium

// Given a string s, find the longest palindromic substring in s. You may assume that the maximum length of s is 1000.

// Example 1:

// Input: "babad"
// Output: "bab"
// Note: "aba" is also a valid answer.
// Example 2:

// Input: "cbbd"
// Output: "bb"


/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    let len = s.length;
    if (len <=1) return s;
    let result = s[0];
    for (let i = 1; i < len; i++) {
        let l = i-1;
        let r = i;
        while (l >= 0 && r < len) {
            if (s[l] !== s[r]) {
                break;
            }
            else {
                if (r-l+1 > result.length) {
                    result = s.substring(l, r+1);
                }
            }
            l--;
            r++;
        }    

        l = i-1;
        r = i+1;
        while (l >= 0 && r < len) {
            if (s[l] !== s[r]) {
                break;
            }
            else {
                if (r-l+1 > result.length) {
                    result = s.substring(l, r+1);
                }
            }
            l--;
            r++;
        }
    }
    return result;
};