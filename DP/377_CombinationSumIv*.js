// Medium

// Given an array of distinct integers nums and a target integer target, return the number of possible combinations that add up to target.

// The answer is guaranteed to fit in a 32-bit integer.

 

// Example 1:

// Input: nums = [1,2,3], target = 4
// Output: 7
// Explanation:
// The possible combination ways are:
// (1, 1, 1, 1)
// (1, 1, 2)
// (1, 2, 1)
// (1, 3)
// (2, 1, 1)
// (2, 2)
// (3, 1)
// Note that different sequences are counted as different combinations.
// Example 2:

// Input: nums = [9], target = 3
// Output: 0
 

// Constraints:

// 1 <= nums.length <= 200
// 1 <= nums[i] <= 1000
// All the elements of nums are unique.
// 1 <= target <= 1000

/**
 * 回溯
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var combinationSum4 = function(nums, target) {
    // 判断只有一个值得情况
    if (nums.length === 1) return Number(nums[0] === target);

    const memo = new Map();
    // 判断target，可以判断target拆分后的组合数字
    const find = (result = [], count) => {
        if (memo.has(count)) return memo.get(count);
        if (count > target) return 0;
        if (count === target) return 1;

        let total = 0;
        for (let el of nums) {
            count = count + el;
            result.push(el);
            total += find(result, count);
            result.pop();
            count -= el;
        }
        // 缓存结果
        memo.set(count, total);
        return total
    };

    return find([], 0);
};

/**
 * 动态规划
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var combinationSum4_dp = function (nums, target) {
    const dp = Array(target + 1).fill(0);
    // 差值为0的情况
    dp[0] = 1
    
    for (let i = 1; i <= target; i++) {
        dp[i] = 0;
        for (let j = 0; j < nums.length; j++) {
            // 如果目标值 >= 当前值
            let diff = i - nums[j];
            if (diff === 0) dp[i] = dp[i] + 1;
            else if (diff > 0) {
                // 当前值统计 + 差值的统计
                dp[i] = dp[i] + dp[diff]
            }
            else continue;
        }
    }
    
    return dp[target]
}
