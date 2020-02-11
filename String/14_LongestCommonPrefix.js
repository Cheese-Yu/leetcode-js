// Easy

// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

// Example 1:

// Input: ["flower","flow","flight"]
// Output: "fl"
// Example 2:

// Input: ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.
// Note:

// All given inputs are in lowercase letters a-z.


/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if (!strs.length) return '';
    let result = '';
    let _str = strs[0];
    
    loop:
    for (let i = 0; i < _str.length; i++) {
        for (let t = 0; t < strs.length; t++) {
            if (strs[t][i] !== _str[i]) {
                break loop;
            }
        }
        result += _str[i];
    }
    return result;
};