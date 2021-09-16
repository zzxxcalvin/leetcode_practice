/**
 * @param {number[]} nums
 * @return {boolean}
 */

// 2021/9/16 19:28 AC
// 28.80% 

// js Set 特性 , 每個數值只能有一個
// input : nums(array)
// 目的: 如果nums中有重複元素 return true , 全部不一樣 return false;

// for loop nums , 把每個元素加入 set , check 如果 set 存在就 return true;

var containsDuplicate = function(nums) {
    let set = new Set();
    for(let i=0;i<nums.length;i++){
        if(set.has(nums[i]))
            return true;
        set.add(nums[i]);
    }
    return false;
};