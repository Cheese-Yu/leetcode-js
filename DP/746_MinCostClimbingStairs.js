/*
 * [746] Min Cost Climbing Stairs
 *
 * https://leetcode.com/problems/min-cost-climbing-stairs/description/
 *
 * Easy (53.58%)
 *
 * You are given an integer array cost where cost[i] is the cost of i^th step
 * on a staircase. Once you pay the cost, you can either climb one or two
 * steps.
 * 
 * You can either start from the step with index 0, or the step with index 1.
 * 
 * Return the minimum cost to reach the top of the floor.
 * 
 * 
 * Example 1:
 * 
 * 
 * Input: cost = [10,15,20]
 * Output: 15
 * Explanation: Cheapest is: start on cost[1], pay that cost, and go to the
 * top.
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: cost = [1,100,1,1,1,100,1,1,100,1]
 * Output: 6
 * Explanation: Cheapest is: start on cost[0], and only step on 1s, skipping
 * cost[3].
 * 
 * 
 * 
 * Constraints:
 * 
 * 
 * 2 <= cost.length <= 1000
 * 0 <= cost[i] <= 999
 * 
 * 
 */

/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {
    const len = cost.length;
    if (!len) return 0;
    if (len === 1) return cost[0];
    if (len === 2) return Math.min(cost[0], cost[1]);

    let _oneStepCount = cost[len - 2];
    let _twoStepCount = cost[len - 1];
    
    for (let i = len-3; i >= 0; i--) {
        console.log(i)
        // 本次消耗 + 前面1步或2步的消耗 = 总消耗
        const _count = cost[i] + Math.min(_oneStepCount, _twoStepCount)

        // 跨两步即为当前值不加
        _twoStepCount = _oneStepCount
        // 前一步的消耗 就变成了 当前总消耗
        _oneStepCount = _count
    }
    return Math.min(_oneStepCount, _twoStepCount);
};
