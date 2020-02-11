// Easy

// Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Note that an empty string is also considered valid.

// Example 1:

// Input: "()"
// Output: true
// Example 2:

// Input: "()[]{}"
// Output: true
// Example 3:

// Input: "(]"
// Output: false
// Example 4:

// Input: "([)]"
// Output: false
// Example 5:

// Input: "{[]}"
// Output: true


/**
 * @param {string} s
 * @return {boolean}
 */
var isValid_v1 = function(s) {
    if (!s) return true;
    if (s.length % 2 > 0) return false;
    var arr = ['()', '{}', '[]'];
    var result = false;

    while (s) {
        result = false;
        for (let i = 0; i < arr.length; i++) {
            if (s.indexOf(arr[i]) > -1) {
                s = s.replace(arr[i], '');
                result = true;
            }
        }
        if (!result) s = '';
    }
    return result;
};


/**
 * @param {string} s
 * @return {boolean}
 */
var isValid_v2 = function(s) {
    if (!s) return true;
    if (s.length % 2 !== 0) return false;
    let arr = [];
    let obj = {
        '(': ')',
        '{': '}',
        '[': ']'
    }
    let result = true;
    
    for (let e of s) {
        switch (e) {
            case '(':
            case '{':
            case '[':
                arr.unshift(obj[e]);
                continue;
            case ')':
            case '}':
            case ']':
                if (e !== arr.shift()) {
                    result = false;
                    break;
                }
                else {
                    continue;
                }
        }
    }
    return arr.length > 0 ? false : result;
};