// Hard

// Given two words word1 and word2, find the minimum number of operations required to convert word1 to word2.

// You have the following 3 operations permitted on a word:

// Insert a character
// Delete a character
// Replace a character
// Example 1:

// Input: word1 = "horse", word2 = "ros"
// Output: 3
// Explanation: 
// horse -> rorse (replace 'h' with 'r')
// rorse -> rose (remove 'r')
// rose -> ros (remove 'e')
// Example 2:

// Input: word1 = "intention", word2 = "execution"
// Output: 5
// Explanation: 
// intention -> inention (remove 't')
// inention -> enention (replace 'i' with 'e')
// enention -> exention (replace 'n' with 'x')
// exention -> exection (replace 'n' with 'c')
// exection -> execution (insert 'u')

/*
 * @lc app=leetcode id=72 lang=javascript
 *
 * [72] Edit Distance
 */

// @lc code=start
/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function(word1, word2) {
    const row = word1.length;
	const column = word2.length;
	if (!row || !column) {
		return row || column
	}

	const dp = [[0,1], [1]];

	for (let i = 1; i <= row; i++) {
		dp[i] = []
		dp[i][0] = dp[i - 1][0] + 1;
	}

	for (let i = 1; i <= column; i++) {
		dp[0][i] = dp[0][i-1] + 1
	}

	for (let i = 1; i <= row; i++) {
		for (let t = 1; t <= column; t++) {
			// 如果相等，则无需操作，操作步数等于上一次的对比次数
		if (word1.charAt(i-1) == word2.charAt(t-1)) {
			dp[i][t] = dp[i-1][t-1]
		} else {
			// 假如替换 dp[i][t] = dp[i-1][t-1] + 1
			// 假如插入 dp[i][t] = dp[i][t-1] + 1
			// 假如删除 dp[i][t] = dp[i-1][t] + 1
			dp[i][t] = Math.min(Math.min(dp[i - 1][t - 1], dp[i][t - 1]), dp[i - 1][t]) + 1;
		}
		}
	}

	return dp[row][column];
};
// @lc code=end

