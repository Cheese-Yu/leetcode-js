// Easy
// Write an algorithm to determine if a number n is happy.

// A happy number is a number defined by the following process:

// Starting with any positive integer, replace the number by the sum of the squares of its digits.
// Repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1.
// Those numbers for which this process ends in 1 are happy.
// Return true if n is a happy number, and false if not.

 

// Example 1:

// Input: n = 19
// Output: true
// Explanation:
// 12 + 92 = 82
// 82 + 22 = 68
// 62 + 82 = 100
// 12 + 02 + 02 = 1
// Example 2:

// Input: n = 2
// Output: false
 

// Constraints:

// 1 <= n <= 231 - 1
/*
 * @lc app=leetcode id=202 lang=javascript
 *
 * [202] Happy Number
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    // 获取指定数字的平方和
    function getN(n) {
        if (n == 1 || n == 0) return n;
        let res = 0;
        while (n) {
            res += (n % 10) * (n % 10);
            n = parseInt(n / 10);
        }
        return res;
    }

    const sumSet = new Set();
    // 如果这个值没有查询过，才继续查询
    while (n != 1 && !sumSet.has(n)) {
        sumSet.add(n);
        n = getN(n);
    }
    return n == 1;
};
// @lc code=end

