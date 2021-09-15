/**
 * @param {number[]} nums
 * @return {number}
 */


// 2021/9/15 14:11 AC


// Problem : 在一個 已排序好 的數字陣列裡計算有多少個不重複的數字 => k 個
//        在 不宣告其他陣列 的情況下把傳入陣列的前 k 個改成這個k 個不重複的數字
// input : nums array
// output : return k(不重複數字有幾個) , 並且原本的陣列重新排序完成, 不用 return nums 

// example : [1,1,2,2,3,4,4] => 4 ,[1,2,3,4,_,_,_] , 只需要在意不重複的數字數量,後面不管

// 10.40%
// 解法 : 用 count 計算不重複數字數量 並且用作 index 來取 nums 
//        初始count為 0 (因為從 nums[0]開始看) ,　但是目前代表有一個不重複數字　,所以做完後還要count++數量才對
//        順序為:檢查nums[count]是否與nums[i]相同,相同數字就略過(i++),不同的話count++,將num[count]變為當前num[i]
//        

var removeDuplicates = function(nums) {
    
    if(nums == null || nums.length==0)
        return 0,nums;
    if(nums.length==1)
        return 1,nums;
    let count = 0;
    
    for(let i=0;i<nums.length;i++){
        //only true when the current number is not the same as the next number
        if(nums[count]!=nums[i]){
            count++;
            nums[count]=nums[i];
        }
    }
    count++;//because index start with zero 
    return count;
};