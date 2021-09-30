/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */

// 2021/9/30 15:50 AC
// input : x(number) , y(number)
// 目的 : 計算兩個數字 寫成 2 進位的形式後 , 有幾位的差異 => Hamming Distance (漢明距離)
// ex : 1,4 
// 1 =>  0001
// 4 =>  1000  
// 這兩個數字的漢明距離就是 2 

// sol 1 : 暴力解(?)
// 用 js 的 toString(2) 可以把數字轉成2進位字串(但覺得靠內建函式太方便了...)
// 然後找比較長的長度 , 短的字串就把前面填滿 0
// 一個一個比較就有結果了

var hammingDistance = function(x, y) {
    let str1 = x.toString(2),
    str2 = y.toString(2);

    let dis = 0;
    let large = str1.length>str2.length ? str2.length : str1.length;
    
    for(let i=str1.length;i<large;i++){
        str1.split().unshift('0').join('');
    }
    for(let i=str2.length;i<large;i++){
        str1.split().unshift('0').join('');
    }
    
    // if(str1.length != str2.length){
    //     dis = Math.abs(str1.length-str2.length);
    //     str1 = str1.slice(-cut);
    //     str2 = str2.slice(-cut);
    // }

    for(let i=0;i<cut;i++){
        if(str1[i]!=str2[i]){
            dis++;
        }
    }
    
    return dis;

};

// sol 2 : 布賴恩·克尼根算法
// 在 leetcode_191 中用到的方法 , 沒想到它有名字 = =

// js 可以做 xor 運算 , 出來的就是 2 進位表示的數字的 xor 的結果
// 在這邊對兩數做 xor 運算 , 等於是只留下差異的位數
// 再運用 191 中的布賴恩·克尼根算法找出 1 的位數 , 就是答案了
// 好像沒有比較快 , 但比較酷

var hammingDistance = function(x, y) {
    let num = x ^ y;
    let count = 0;
    while(num !=0){
        num &= num-1;
        count++; 
    }
    return count;
};