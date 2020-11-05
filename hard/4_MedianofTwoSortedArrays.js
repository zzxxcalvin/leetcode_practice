/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */

// 2020/11/5 17:42 AC

// 輸入兩個已排序好的 array ，找出兩者合起來後的中位數(medium)
// 作法 : 先將兩 array 合併為一 array , 然後回傳中位數
// 優勢 : 兩 Araay 為排序好的 array , 直接進行每次比較即可

var findMedianSortedArrays = function(nums1, nums2) {
    // 宣告合併 array 與 array 長度(兩者加總)
    var mergeLen = nums1.length + nums2.length;
    let mergeArray = new Array;

    // 終止條件為 array1 array2 皆沒有元素
    // 複雜度為 O(m+n) (應該啦)
    for (let i=0,j=0,index = 0;i<nums1.length||j<nums2.length;index++){
        
        // 用此變數判斷要進行的動作
        let nums1Bigger;
        // 條件用於去除[] 但保留元素 = 0 的時候 , 看得時候思考一下 ,可能還可以優化
        if( (nums1[i]||nums1[i]==0) && (nums2[j]||nums2[j]==0) )
            nums1Bigger = nums1[i] >= nums2[j] ? true:false;
        else if( (nums1[i]||nums1[i]==0) && !nums2[j]){
            nums1Bigger = false;
        } else if(!nums1[i] && (nums2[j]||nums2[j]==0) ) {
            nums1Bigger = true;
        } 
        
        // 因為排序方式為由小到大 , 因此比較大小取較小的 
        // 如果 陣列1 當前元素比較大 => 把陣列2 當前元素推入 , j ++
        if(nums1Bigger){    
            mergeArray[index] = nums2[j];
            j++;
        } else {
        // 反之將 陣列1 當前元素推入 i++
            mergeArray[index] = nums1[i];
            i++;
        }

    }

    let median;

    //正常中位數公式 , 1 元素為自身 ,基數個元素為中間,偶數個元素為中央兩元素相加除以 2 
    if(mergeLen == 1)
        median = mergeArray[0];
    else if(mergeLen%2 ==0 )
        median = ( mergeArray[mergeLen/2] + mergeArray[mergeLen/2 - 1] ) / 2;
    else 
        median =  mergeArray[Math.floor(mergeLen/2)];
    return median;

};

let arr = [];
let arr2 = [0];

let tmp = findMedianSortedArrays(arr,arr2);
console.log(tmp);