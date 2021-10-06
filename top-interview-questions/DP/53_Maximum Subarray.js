/**
 * @param {number[]} nums
 * @return {number}
 */

// 2021/10/6 20:39 AC
// input : nums(int[])(有負)
// 目的 : 求最大的 連續數字的總和
// 作法 : 這題這樣做應該有一點點 DP
// 正的走遍歷一次 , 並且隨時更新當前 index 的值
// 我們從頭開始比較一件事 , 當前的nums[i]加上nums[i-1]的值,是否會比nums[i]本身大 ?
// 會的話我們就更新nums[i]成比較大的值 , 沒有的話就保留原本 nums[i] 的值
// 這樣可以確保的是 , nums[i-1] 永遠都是 <i 中連續的數字加總的最大值 
// (如果前面連加起來甚至沒有nums[i] + nums[i-1]大的話 , 前面加總的數字就會被捨棄掉 , max 便是 nums[i])
// (因為有負的輸入所以才會這樣啦)

// 用一個 max 去紀錄當前出現過的最大值 , 反正每次比較 , 如果更大就更新
// 迴圈結束 return max 就是解答

// **題目還有要求一個 divide and conquer 的解法
// 目前還沒解出這個解法


// 假設 : 如果題目問組成最大值的 index 或是哪些數的話 , 就用一個陣列儲存 , 每次 max 更新的時候就多推入一個值
// 如果是 nums[i] > nums[i]+nums[i-1]的情況就直接清空陣列 , 這樣應該就能解決了

var maxSubArray = function(nums) {
    if(nums.length<2)
        return nums;
    let max = nums[0];
    for(let i=1;i<nums.length;i++){
        nums[i] = (nums[i]+nums[i-1]) >= nums[i] ? (nums[i]+nums[i-1]) : nums[i] ;
        if(max <nums[i])
            max = nums[i];
    }

    return max;
};