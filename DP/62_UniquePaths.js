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
		if (!dpArray[i]) {
			dpArray[i] = []
		}
		for (let t = 1; t <= n; t++) {
			dp(i, t);
		}
	}
	return dpArray[m][n]
};
// @lc code=end

