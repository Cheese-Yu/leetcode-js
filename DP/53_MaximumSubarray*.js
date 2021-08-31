// Easy

// Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

// Example:

// Input: [-2,1,-3,4,-1,2,1,-5,4],
// Output: 6
// Explanation: [4,-1,2,1] has the largest sum = 6.
// Follow up:

// If you have figured out the O(n) solution, try coding another solution using the divide and conquer approach, which is more subtle.


/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let sum = nums[0] || 0;
    let result = nums[0] || 0;
    for (let i = 1; i < nums.length; i++) {
        // 逐个累加
        sum += nums[i];
        // 如果累加值 比 当前值小，即之前的累加未负数，调整起始值
        if (nums[i] > sum) sum = nums[i];
        result = Math.max(sum, result);
    }
    return result;
};

var maxSubArray2 = function(nums) {
    let result = nums[0];
    let dp = [];
    dp[0] = nums[0];
    for (let i = 1; i < nums.length; i++) {
        // dp[i] 的和 等于前面的和 + 本次的值 或者是 本次的值
        dp[i] = Math.max(dp[i-1] + nums[i], nums[i])

        result = Math.max(dp[i], result)
        // 如果累加值为负数，则重新寻找起点
        if (dp[i] < 0) dp[i] = 0;
    }
    return result;
};
