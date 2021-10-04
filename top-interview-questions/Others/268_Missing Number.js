/**
 * @param {number[]} nums
 * @return {number}
 */

// 2021/10/4 19:39 AC
// 54.11%(time)
// input : nums(number [])
// 目的 : 給定的陣列應該要是一個包含了 0 ~ nums.size 的陣列 , 但其中缺了一個數字 
// 因此陣列目前的大小就剛好是 nums.length (如果扣掉 0 去計算 size 的話就是這個大小,這預設要有0)
// ex : [0,1] 的 size(length) 是 2 , 所以這個目標應該要一個包含 0~2 的陣列 ,這邊少了 2
// 目標是找出缺少的那個數字

// 解法 : loop 一遍 nums , 然後建立一個 map 儲存所有數字
// 以 nums.length 為終止index ,檢查map中是否存在 當前 i 的數字
// 沒有即為解答 , 結尾直接 return nums.length (缺少最尾數字的情況)

var missingNumber = function(nums) {
    if(nums.length==1)
        return nums[0]==1 ? 0:1;
    let map_ = new Map();
    for(let i=0;i<nums.length;i++){
        map_.set(nums[i],1);
    }

    for(let i=0;i<nums.length;i++){
        if(!map_.has(i))
            return i;
    }
    return nums.length;
};