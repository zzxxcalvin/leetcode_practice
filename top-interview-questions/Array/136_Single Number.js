/**
 * @param {number[]} nums
 * @return {number}
 */

// 2021/9/16 19:35 AC
// 54.26%

// input :nums(array)
// 目的 , nums 全部數字都是兩個 , return 只出現一次的那個數字
// 要求 , O(n) 並且只使用 constant 的額外空間
// 解法 , sort 再 for-loop ,每次 +2 , 自己跟下一個不一樣的時候就是答案

var singleNumber = function(nums) {
    nums = nums.sort();
    for(let i =0;i<nums.length;i+=2){
        if(nums[i]!=nums[i+1])
            return nums[i];
    }
};