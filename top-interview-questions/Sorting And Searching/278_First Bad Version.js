/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */

// 2021/9/29 13:36 AC
// 73.43%(time)
// input : n(int) bad(int)
// 目的 : 題目輸入只有兩個數字 , n 跟 bad
// 題目大意是 有 n 個版本(1~n) 的同一產品 , 找出哪一個數字開始的版本是 Bad 的產品
// 基本上 bad 是隱藏輸入 , 預設就知道哪一個產品開始是 Bad
// 題目已經給定了寫好的 API => isBadVersion , isBadVersion(n)是 true 的話就代表是 Bad Version
// 但是 > 預設輸入 Bad 的所有輸入都會是 True , 所以要找到 Bad 到底是多少

// 解法 : 二分搜尋(吧?)(後來發現這不是二分搜的標準寫法 , 應該要用 min max 什麼的(?))
// 一開始就直接從 最中間 開始檢查是不是 bad , 是的話就往前半 trace (index減少), 反之往後半 (index增加)
// index 改變的量會是 (n/2^執行次數) , 因為每次執行完後的另外半邊都可以確定不是目標的結果
// 大概就醬(?) 還沒想到怎麼講 二分搜尋 的原理比較好 , 不過應該看得懂

// 下面多加了一些判斷條件 跟 max 的限制 
// 因為題目的 isBadVersion() 好像是 >= bad 都會是 true , 沒在管 n 是多少的


var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        let max = n;
        n = Math.ceil(n/2);
        let index = n;
        while(1){
            if(n == 1 && isBadVersion(index) &&!isBadVersion(index-1)){
                break;
            }
            if(isBadVersion(index)){
                index -= n;
            }else{
                index += n;
                if(index > max)
                    index = max;
            }
            n = Math.ceil(n/2);
        }
        return index;
    };
};