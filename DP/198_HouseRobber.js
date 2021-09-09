// House Robber
// Medium (43.69%)

// You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed, the only constraint stopping you from robbing each of them is that adjacent houses have security systems connected and it will automatically contact the police if two adjacent houses were broken into on the same night.

// Given an integer array nums representing the amount of money of each house, return the maximum amount of money you can rob tonight without alerting the police.

 

// Example 1:

// Input: nums = [1,2,3,1]
// Output: 4
// Explanation: Rob house 1 (money = 1) and then rob house 3 (money = 3).
// Total amount you can rob = 1 + 3 = 4.
// Example 2:

// Input: nums = [2,7,9,3,1]
// Output: 12
// Explanation: Rob house 1 (money = 2), rob house 3 (money = 9) and rob house 5 (money = 1).
// Total amount you can rob = 2 + 9 + 1 = 12.
 

// Constraints:

// 1 <= nums.length <= 100
// 0 <= nums[i] <= 400

/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    const len = nums.length;
    if (len < 1) return nums[0] || 0;
    if (len === 2) return Math.max(nums[0], nums[1]);

    // 不能取相邻的值
    //
    let _lastOneMax = 0;
    let _lastTwoMax = 0;
    for (let i of nums) {
        // Max(取当前+前2家的最大值, 取前一家)
        const currMax = Math.max(i + _lastTwoMax, _lastOneMax);
        _lastTwoMax = _lastOneMax;
        _lastOneMax = currMax;
    }
    return Math.max(_lastOneMax, _lastTwoMax);
};
