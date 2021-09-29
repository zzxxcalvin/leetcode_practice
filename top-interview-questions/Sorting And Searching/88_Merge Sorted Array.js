/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */

// 2021/9/29 12:49 AC(*)
// 92.45%(time)
// https://samuel-yeh.medium.com/leetcode-with-javascript-88-merge-sorted-array-92c0e20f830e
// input : nums1 (number array) , m(int) , nums2 (number array) , n (int)
// 目的 : 這題給定 sorted 的兩個 array nums1 , nums2 
// 要注意 , nums1 的 size 是 m+n , 但有效數字只有前 m 個 , 後 n 個在 nums1 裡都是 0
// 這題目的是將 nums2 跟 nums1 合併成 nums1 , 然後結果也必須是排序好的

// 其實怎麼讀題目好像就決定怎麼解了
// 這題應該要說成 , "把 nums2 的數字合併進 nums1 , 然後排序"
// 然後解法就會跟上面這句話的步驟一樣了

// 最開始的想法是邊比較邊放進去 nums1 , 可是在想要怎麼插進中間而且要怎麼清掉後面的 0
// 後來看別人的作法是先都放進 nums1 , 這樣就完成 清掉0 的部分了
// 然後再用 bubble sort 把合併後的 nums1 排序好就完成了
// 不知道用別的 sort 會不會比較快

var merge = function(nums1, m, nums2, n) {
    
    for(let i=m,j=0 ; i<m+n ; i++,j++){
        nums1[i] = nums2[j];
    }

    for(let i=0 ; i<m+n ; i++){
        for(let j=m+n-1 ; j>i ; j--){
            if(nums1[i]>=nums1[j]){
                let temp = nums1[i];
                nums1[i] = nums1[j];
                nums1[j] = temp ;
            }
        }
    }
    return ;

};