/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// 暴力法

// var twoSum = function(nums, target) {
//     for(let i=0;i<nums.length;i++){
//         for(j=i+1;j<nums.length;j++){
//             if(nums[i]+nums[j]==target){
//                 return new Array(nums[i],nums[j]);
//             }
//         }
//     }
//     return false;
// };


// 2020/11/4 17:00 AC

// 進入第一層迴圈
// 使用 map 紀錄陣列中的每個數字跟他的index ,
// map => { key:value } , key => 數字 , value => index
// 當 target - nums[i](當前迴圈到的值) 得到的值有被儲存時 , 代表陣列中有兩個數字可以完成這個組合
// 分別為位置 i 以及位置 map[target-num[i]]
// 回傳這兩個 index 即為答案 

var twoSum = function (nums,target){

    // var map = {};
    // 使用空物件宣告會長成這樣 {'3': 1 , '1': 2 }

    var map = new Array();
    // 使用 Array 宣告會長成這樣 [emptyitem, 2 ,emptyitem, 1];

    console.log(map);
    for(let i=0;i<nums.length;i++){
        let tmp = nums[i];
        
        if(map[target - tmp] >=0){
            console.log(map);
            return [map[target-tmp],i];
        } else {
            map[tmp] = i;
        }
    }
};

let t = [1,5,9,2];
let tar = 10;

console.log(twoSum(t,tar));