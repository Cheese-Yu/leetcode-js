// Medium

// A robot is located at the top-left corner of a m x n grid (marked 'Start' in the diagram below).

// The robot can only move either down or right at any point in time. The robot is trying to reach the bottom-right corner of the grid (marked 'Finish' in the diagram below).

// How many possible unique paths are there?

// Example 1:

// Input: m = 3, n = 2
// Output: 3
// Explanation:
// From the top-left corner, there are a total of 3 ways to reach the bottom-right corner:
// 1. Right -> Right -> Down
// 2. Right -> Down -> Right
// 3. Down -> Right -> Right

// Example 2:

// Input: m = 7, n = 3
// Output: 28

/*
 * @lc app=leetcode id=62 lang=javascript
 *
 * [62] Unique Paths
 */

// @lc code=start
/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    if (m < 2 || n < 2) return 1;
    
    let dpArray = [];
    const dp = function(m, n) {
        if (m == 1 || n == 1) {
            dpArray[m][n] = 1
        } else {
            dpArray[m][n] = dpArray[m-1][n] + dpArray[m][n-1]
        }
    }

    for (let i = 1; i <= m; i++) {
        dpArray[i] = []
        for (let t = 1; t <= n; t++) {
            dp(i, t)
        }
    }
    return dpArray[m][n]
};


/**
 * @description 优化空间复杂度为O(n)
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths2 = function(m, n) {
    if (m < 2 || n < 2) return 1;
    
    let dpArray = [];

    for (let i = 1; i < m; i++) {
        dpArray[0] = 1;
        for (let t = 1; t < n; t++) {
            if (!dpArray[t]) {
                dpArray[t] = 1;
            }
            dpArray[t] = dpArray[t-1] + dpArray[t]
        }
    }
    return dpArray[n-1]
};
// @lc code=end

