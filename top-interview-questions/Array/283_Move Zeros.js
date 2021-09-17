/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

// 2021/9/17 17:51 AC
// input: nums(array)
// 19.01% (time) 70.91%(Memory)
// 目的: 將 nums 中所有的 0 移到陣列最尾端 
// 限制: 不使用額外的陣列
// 作法, 只用一個 constant : count 來計算 0 的數量
// for-loop nums , 發現 0 就剔除並且 count ++ ;
// 結束後再 for-loop i<count , 將 0 push 回去

var moveZeroes = function(nums) {
    let count = 0;
    for(let i=0;i<nums.length;i++){
        if(nums[i]==0){
            nums.splice(i,1);
            count++;
            i--;
        }
    }
    for(let i=0;i<count;i++){
        nums.push(0);
    }
    return nums;
};