/**
 * @param {number} n
 * @return {number}
 */

// 2021/10/4 20:12 AC
// input : n(int)
// 目的 : n 是指說總共有幾階的階梯 , 規則上規定每次走樓梯 , ** 可以選擇走 1 or 2 階 ** , 問總共有幾種方式可以走完 n 階
// DP初見(應該說第一次考慮DP是什麼)
// DP 的理念是 problem to sub problem , 大問題變成 (小問題的組合) , 因此最先要觀測結果怎麼達到的
// 在這題 , 走到 1 階只有 1 種方法 , 走到 2 階 有 2 種方法 (直接踏 2 階 or 1 + 1)
// 那走到 3 階有幾種方法 ? 這裡應該要考慮的是 : 怎麼走到 3 階 ?
// 拆分問題後會發現 , 其實走到 3 階就是 從 2 -> 3 或是 從 1 -> 3 這兩種可能性而已
// 等於是 走到 1 階的方法 * 1( 1 直接走到3) + 走到二階的方法 * 1 ( 2 直接走到 3)
// 那其實就是 climbstairs(3) = climbstairs(1) + climbstairs(2)  
// 那這樣寫成 recursive 就有解答了 ... 並沒有 , 會 time limit
// DP 其實還有一個重點是紀錄步驟 , 所以我們不是只關心最後的結果(recursive就只關心最終結果(應該啦))
// 我們其實是每次只解一個問題 , 只解當前的問題
// 於是 climbstairs(n) = climbstairs(n-1) + climbstairs(n-2) for all n > 2 就是這題的公式了
// 那我們索性把所有結果儲存起來 , 每次計算只取兩個數出來做
// 就用 i 代表 n , steps[i] 便是 climbstairs(i) 的結果 , 每次的答案就是 steps[i-2] + steps[i-1]
// 執行完畢後 , return steps[n] ,便得到結果了
// (那其實這個時候到 n 為止的全部答案我們都有了)

var climbStairs = function(n) {
    
    let steps = [0,1,2];
    for(let i=3;i<=n;i++){
        steps.push(steps[i-1]+steps[i-2]);
    }
    
    return steps[n];
};

/*

下面是遞迴寫法 , 應該並不能算是 DP 的作法 (而且在這題會 time limit)
DP 的理念是紀錄步驟 , 將 problem 拆分為 sub problem , 每次只關心當前步驟要做的事 , 而不在乎前面步驟
聽起來跟遞迴類似 , 但遞迴只有在執行到 edge case 的時候會 return ,並且答案是在 call stack 中一一疊加起來的
DP 記錄了所有步驟的結果(幾乎啦) 是以大量空間 換取時間的手法

var climbStairs = function(n) {
    if(n==1)
        return 1;
    if(n==2)
        return 2;
    return climbStairs(n-1)+climbStairs(n-2);
};
*/