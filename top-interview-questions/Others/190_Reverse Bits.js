/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */

// 2021/9/30 16:23 AC
// input : n(poitive int) 
// 目的 : 將 n 的二進位表示形式的 前後翻轉 後再轉成數字
// 作法 : 有點靠內建函式暴力解 
// 轉成 binary 字串 -> 反轉 -> 轉回數字
// 因為題目要保持永遠都是 32 位 的形式 , 所以都要把讀進來的字前面補 0 補到長度 32
// 這樣反轉完的數字轉回來才不會是錯的

// 其他正常一點的做法 : 
// https://qiuyuntao.github.io/leetcode/solution/190.html
// https://skyyen999.gitbooks.io/-leetcode-with-javascript/content/questions/190md.html

var reverseBits = function(n) {
    
    let str = n.toString(2);
    while(str.length < 32){
        str = '0'.concat(str);
    }
    str = str.split('').reverse().join('');
    let num = parseInt(str,2);
    return num;
};