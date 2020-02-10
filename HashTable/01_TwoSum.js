// Easy

// Given an array of integers, return indices of the two numbers such that they add up to a specific target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// Example:

// Given nums = [2, 7, 11, 15], target = 9,

// Because nums[0] + nums[1] = 2 + 7 = 9,
// return [0, 1].


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
function twoSum_v1(nums, target) {
    let dic = Object();
    for (let i = 0; i < nums.length; i++){
        if (target - nums[i] in dic){
            return [dic[target - nums[i]], i];
        }
        dic[nums[i]] = i;
    }
}

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
function twoSum_v2(nums, target) {
    let dic = [];
    for (let i = 0; i < nums.length; i++){
        let index = dic.indexOf(target - nums[i]);
        if (index > -1){
            return [index, i];
        }
        dic.push(nums[i]);
    }
}