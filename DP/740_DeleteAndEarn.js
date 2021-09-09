/*
 *
 * [740] Delete and Earn
 *
 * https://leetcode.com/problems/delete-and-earn/description/
 *
 * algorithms
 * Medium (51.41%)
 * Likes:    2093
 * Dislikes: 147
 * Total Accepted:    72.8K
 * Total Submissions: 138.5K
 * Testcase Example:  '[3,4,2]'
 *
 * You are given an integer array nums. You want to maximize the number of
 * points you get by performing the following operation any number of
 * times:
 * 
 * 
 * Pick any nums[i] and delete it to earn nums[i] points. Afterwards, you must
 * delete every element equal to nums[i] - 1 and every element equal to nums[i]
 * + 1.
 * 
 * 
 * Return the maximum number of points you can earn by applying the above
 * operation some number of times.
 * 
 * 
 * Example 1:
 * 
 * 
 * Input: nums = [3,4,2]
 * Output: 6
 * Explanation: You can perform the following operations:
 * - Delete 4 to earn 4 points. Consequently, 3 is also deleted. nums = [2].
 * - Delete 2 to earn 2 points. nums = [].
 * You earn a total of 6 points.
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: nums = [2,2,3,3,3,4]
 * Output: 9
 * Explanation: You can perform the following operations:
 * - Delete a 3 to earn 3 points. All 2's and 4's are also deleted. nums =
 * [3,3].
 * - Delete a 3 again to earn 3 points. nums = [3].
 * - Delete a 3 once more to earn 3 points. nums = [].
 * You earn a total of 9 points.
 * 
 * 
 * Constraints:
 * 
 * 
 * 1 <= nums.length <= 2 * 10^4
 * 1 <= nums[i] <= 10^4
 * 
 * 
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var deleteAndEarn = function(nums) {
    // 乱序数组，与位置无关系，和值的大小有关系
    // 得到一个nums[i]，然后删除所有等于nums[i]-1和nums[i]+1的数
    // 以此往复，返回累加最大的结果
    const len = nums.length;
    if (len < 1) return nums[0] || 0;

    // 那么dp[i] = Max(dp[i-1], dp[i-2] + sum(i))
    nums = nums.sort((a, b) => a - b);

    const min = nums[0];
    const hash = {}; const dp = {};
    // 先统计出各种数字的和
    for (let num of nums) {
        if (!hash[num]) hash[num] = 0;
        hash[num] += num;
    }
    dp[min] = hash[min];

    const find = (i) => {
        if (i < min) return 0;
        if (dp[i]) return dp[i];

        let valueCount = hash[i] || 0;
        const result = Math.max((valueCount + find(i-2)), find(i-1))
        dp[i] = result;
        return result
    };

    // 直接查最大值
    find(nums[len - 1])

    return Math.max(...Object.values(dp))
};

var deleteAndEarn2 = function(nums) {
    // 乱序数组，与位置无关系，和值的大小有关系
    // 得到一个nums[i]，然后删除所有等于nums[i]-1和nums[i]+1的数
    // 以此往复，返回累加最大的结果
    const len = nums.length;
    if (len < 1) return nums[0] || 0;

    const hash = {};
    // 先统计出各种数字的和
    for (let num of nums) {
        if (!hash[num]) hash[num] = 0;
        hash[num] += num;
    }

    let lastMax = 0;
    let lastTwoMax = 0;
    let preKey = 0;
    // 从头遍历
    for (let key in hash) {
        const currMax = Math.max(lastTwoMax + hash[key], key - preKey > 1 ? lastMax + hash[key] : lastMax);
        preKey = key;
        lastTwoMax = lastMax;
        lastMax = currMax;
    }

    return Math.max(lastTwoMax, lastMax)
};
