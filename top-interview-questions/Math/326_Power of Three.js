/**
 * @param {number} n
 * @return {boolean}
 */

// 2021/9/30 AC
// 47.02%(time)
// input : n
// 目的 : 求 n 是否是 3 的次方倍
// 解法 : 直觀解決 , 然後 1 要例外處理 , 因為 1 是任何數的 0 次方 
// 時間複雜度應該是 O(n) , 只是數字會到很大

var isPowerOfThree = function(n) {
    if(n == 1)
        return true;
    let base = 3 ;
    while(base<=n){
        if((n - base) == 0){
            return true;
        }
        base = base * 3;
    }
    return false;
};