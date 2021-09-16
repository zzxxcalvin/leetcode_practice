/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */

// 2021/9/16 17:43 AC
// input: nums(array) , k (int)
// 目的: 把 nums 正向旋轉(所有元素向右位移一格) k 次

// 暴力解: 額外宣告一個陣列 , 以 K 為 index ,分開把旋轉過後前後的元素放進新陣列
// 空間複雜度: O(n) (宣告了一個跟 input nums 一樣大小的陣列)

// 非最佳解 , 此題最佳解法應該要不使用額外空間

var rotate = function(nums, k) {
    if(nums.length >1){
        if(k>nums.length){
            k = k % nums.length;
        }
        let arr = new Array(nums.length);
        for(let i=0;i<nums.length-k;i++){
            arr[k+i]=nums[i];
        }
        for(let i=0;i<k;i++){
            arr[i]=nums[nums.length-k+i];
        }

        for(let i=0;i<nums.length;i++){
            nums[i]=arr[i];
        }
    }
    return ;
};

/* 
本地跑得過 , judge 跑不過的方法
在 judge 那邊 nums.slice 的結果會被拋棄 , 只剩下 slice 完的 nums 還在
先不繼續解

var rotate = function(nums,k){
    nums.reverse();
    nums.splice(0,k).reverse().concat(nums);
    nums.splice(0,k).concat(nums.reverse());

}

let nums = [1,2,3,4,5,6];

let k = 2;

rotate(nums,k);

*/