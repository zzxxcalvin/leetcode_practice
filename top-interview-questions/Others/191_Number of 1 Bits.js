/**
 * @param {number} n - a positive integer
 * @return {number}
 */

// 2021/9/30 AC(*)
// https://www.cnblogs.com/cnoodle/p/11681978.html
// input : n(positive int) ,但是以 32 位的 0跟1 來表示
// 目的 : 求這個數字轉換成 32 位元 的時候其中有幾個 1

// 解法是想不到網路上看的
// 大概解釋是 , 在轉換成 2 進位來看的情況下 , 進行 n & n-1 運算的結果 , 會把最右邊的 1 給消除(圖像上)
// 隨便找一個數轉成 2 進位然後來做做就知道了
// 有夠鬼 = = 記住就是了 , 就是一個特性

var hammingWeight = function(n) {
    let ones = 0;
    while(n!=0){
        n &= n-1;
        ones ++;
    }
    return ones;
};