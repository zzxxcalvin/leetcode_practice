
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */

// 2021/9/16 20:04 AC
// 5.76%

// input : nums1(array),nums2(array)
// 求兩者的 交集 , 出現複數次的數字計算就為複數次

// for-loop 其中一個 array , 直接用 indexOf() 確認是否當前數字有出現在另一個陣列內
// 每次出現後將該元素去除 (js 作法 , splice(index,1) ) , 因為需要計算總共出現幾次,能找到幾次刪幾次的概念
// 效率非常差 , 應該是 O(n^2) 

// 可以用 map 紀錄其中一個 array 變成 (元素:出現次數) 的形式來解
// 會變成 O(n)

var intersect = function(nums1, nums2) {

    let set1 = []
    let ans = [];

    for(let i =0;i<nums2.length;i++){
        if(nums1.indexOf(nums2[i])>-1){
            console.log(nums2[i]);
            nums1.splice(nums1.indexOf(nums2[i]),1);
            ans.push(nums2[i]);
        }
    }
    // console.log(ans);
    return ans;

};

nums1 = [4,9,5,9];
nums2 = [9,4,9,8,4];


// 2021/9/17 17:23 AC 2th
// 17.37%
// 用 map 存 array1的 (數字:出現次數)
// 然後再跟 array2 一一比對 , 每次發現就 次數-1 , 並放入 ans


var intersect_ = function(nums1,nums2) {
    let map1 = new Map();
    let ans = [];
    for(let i =0;i<nums1.length;i++){
        if(map1.has(nums1[i])){
            map1.set(nums1[i], map1.get(nums1[i])+1 );
        }
        else{
            map1.set(nums1[i],1);
        }
    }

    for(let i=0;i<nums2.length;i++){
        if(map1.has(nums2[i]) && map1.get(nums2[i])>0 ){
            ans.push(nums2[i]);
            map1.set(nums2[i], map1.get(nums2[i])-1 );
        }
    }
    console.log(ans);
    return ans;
}

intersect_(nums1,nums2);