/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// 2021/9/15 再寫一次 twosum
// 17:07 AC
// 63.38 %

// input: nums(array) , target(int)

// 解法: 使用兩次O(n)的迴圈,第一次製作紀錄 差(difference) 的array
// 用一個 key,value 的資料結構 (js的 array 就可以指定 key,下稱 diff) 儲存 target 跟每一個數的差(difference)
// diff 中的存法是 diff[2] = 0 代表的是在nums[0] 的位置的數 , 跟 target 差 2
// 接著迴圈執行nums[i] , 並且每次檢查 diff[nums[i]] 裡是否defined , 這代表的是 nums 中是否有另一數的補數
// 因為 diff 儲存的 value 就是補數的 index , 就可以直接回傳當前 index 跟 補數 的 index , 即為解答
// 注意因為可能會有 target 是某數的兩倍的狀況,但是不能同一數使用兩次,因此要檢查補數的 index 是不是跟當前 i 一樣
// 這應該 O(n) 吧 (?)

var twoSum = function(nums, target) {
    
    let diff = [];
    
    for(let i=0;i<nums.length;i++){
        diff[target-nums[i]]=i;
        
    }
    
    for(let i=0;i<nums.length;i++){
        if(diff[nums[i]]!=null && diff[nums[i]]!=i){
            return [i,diff[nums[i]]];
        }
    }
};