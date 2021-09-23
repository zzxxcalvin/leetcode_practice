    /**
 * @param {number} n
 * @return {string}
 */

// 2021/9/23 17:58 AC
// 49.41%(time)
// input : n(int)
// 目的 : 這題的題目真的 TMD 難懂 ,題目是 count and say 
// 規則是從 1 開始 , 每次數出前一次結果的,連續的數字的數量 
// R1 : 1 
// R2 : 一個 1 => 11
// R3 : 兩個 1 => 21
// R4 : 一個 2 , 一個 1 => 1211
// R5 : 一個 1 , 一個 2 , 兩個 1 => 111211
// .
// .
// .

// 解法 : 用一個陣列當初始 , 一個用來記錄步驟 , 直接宣告成 R1 ( [1] )
// 雙層迴圈 , 外層代表 Round , 裡面的用來數數
// 每次檢查當前的數字跟上一個一不一樣 , 一樣就 count ++
// 不一樣就把前一個 arr1[j-1] 推入 arr2 , 順序是 數量(count),數字 , 並且把當前 count 設為 1 (代表現在的數字)
// loop 到最後一個字的時候就直接推入 count,數字

var countAndSay = function(n) {
    
    let arr1 = [1];
    let arr2 = [];
    for(let i = 0 ; i < n-1 ; i++){
        let count = 0;
        for(let j = 0 ; j < arr1.length ; j++ ){
            if( j > 0 && arr1[j] != arr1[j-1]){
                arr2.push(count);
                arr2.push(arr1[j-1]);
                count = 1;
            }else{
                count++;
            }
            if(j == arr1.length-1){
                arr2.push(count);
                arr2.push(arr1[j]);
            }
        }
        arr1 = arr2;
        arr2 = [];
    }
    arr1 = arr1.join('');
    return arr1;
};

countAndSay(7);