// Medium

// Given a string, find the length of the longest substring without repeating characters.

// Example 1:

// Input: "abcabcbb"
// Output: 3 
// Explanation: The answer is "abc", with the length of 3. 
// Example 2:

// Input: "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.
// Example 3:

// Input: "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3. 
//              Note that the answer must be a substring, "pwke" is a subsequence and not a substring.


/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    if (!s) return 0;
    let _s = s[0];
    let result = _s;
    for (let i = 1; i < s.length; i++) {
        if (_s.includes(s[i])) {
            if (result.length < _s.length) {
                result = _s;
            }
            _s = _s.substring(_s.indexOf(s[i]) + 1, _s.length) + s[i];
        }
        else {
            _s += s[i];
        }
    }
    return result.length > _s.length ? result.length : _s.length;
};