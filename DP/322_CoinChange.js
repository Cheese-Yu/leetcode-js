// 322. Coin Change
// Medium

// You are given an integer array coins representing coins of different denominations and an integer amount representing a total amount of money.

// Return the fewest number of coins that you need to make up that amount. If that amount of money cannot be made up by any combination of the coins, return -1.

// You may assume that you have an infinite number of each kind of coin.

// Example 1:

// Input: coins = [1,2,5], amount = 11
// Output: 3
// Explanation: 11 = 5 + 5 + 1
// Example 2:

// Input: coins = [2], amount = 3
// Output: -1
// Example 3:

// Input: coins = [1], amount = 0
// Output: 0
// Example 4:

// Input: coins = [1], amount = 1
// Output: 1
// Example 5:

// Input: coins = [1], amount = 2
// Output: 2

// Constraints:

// 1 <= coins.length <= 12
// 1 <= coins[i] <= 231 - 1
// 0 <= amount <= 104
/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
    if (!amount) return 0;
    // 有一个缓存
    let hash = {0: 0};

    // 从 0 开始累加
    for (let i = 1; i <= amount; i++) {
        // 有值直接返回
        if (hash[i]) continue;
        // 初始值为 Infinity
        hash[i] = Infinity;
        // 逐个累加
        for (let v of coins) {
            let diff = i - v;
            if (diff < 0) continue;

            hash[i] = Math.min(hash[i], hash[diff] + 1)
        }
    }

    const _r = hash[amount];

    return _r != Infinity ? _r : -1;
};

// 会超时
var coinChange2 = function(coins, amount) {
    if (!amount) return 0;
    let len = coins.length;
    // 从大到小排列硬币
    coins.sort((a, b) => b - a);

    // 最少的情况 一定是 尽量使用大额的，然后用小额的凑 ??
    let min = Infinity;
    const find = (count, _amount, coinIndex) => {
        if (_amount < 0) return;
        // 如果 _amount 为 0，则认为已经凑完了
        if (!_amount) {
            min = Math.min(min, count);
            return;
        };
        // 如果硬币全部遍历完了，终止
        if (coinIndex >= len) return;
        // 每枚硬币 单独拿出来
        const coin = coins[coinIndex];
        // 当前硬币最多凑多少，遍历到 0 个的情况
        let _count = Math.floor(_amount / coin);
        for (let i = _count; i >= 0; i--) {
            const _fullCount = count + i;
            // 如果后面的次数越来越多，那后面就不要测了
            if (_fullCount >= min) return;
            // 查找剩余的要怎么凑
            find(_fullCount, _amount - (coin * i), coinIndex + 1)
        }
    }

    find(0, amount, 0)
    return min != Infinity ? min : -1;
}
