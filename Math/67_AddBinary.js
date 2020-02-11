// Easy

// Given two binary strings, return their sum (also a binary string).

// The input strings are both non-empty and contains only characters 1 or 0.

// Example 1:

// Input: a = "11", b = "1"
// Output: "100"
// Example 2:

// Input: a = "1010", b = "1011"
// Output: "10101"


/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    let len = b.length;
    let dif = Math.abs(a.length - b.length);
    let str = '';
    for (let i = 0; i < dif; i++) {
        str += '0';
    }
    if (a.length > b.length) {
        b = str + b;
        len = a.length;
    }
    else {
        a = str + a;
    }

    let result = '';
    let num = 0;
    for (let i = len-1; i >= 0; i--) {
        let _resut = parseInt(a[i]) + parseInt(b[i]) + num;
        if (_resut > 1) {
            num = Math.min(_resut - 1, 1);
            _resut = Math.min(_resut - 2, 1);
        }
        else {
            num = 0;
        }
        result = _resut + result;
    }
    if (num == 1) result = '1' + result;
    return result;
};