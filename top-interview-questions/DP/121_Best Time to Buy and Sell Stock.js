/**
 * @param {number[]} prices
 * @return {number}
 */

// 2021/10/6 20:20 AC
// input : prices(int[])
// 目的 : 你可以選擇一天買股票 , 然後在它之後的天數賣掉 , 求最大可獲得的利潤

// 解法 : 這題被歸類在 DP , 但我看不出來這樣哪裡有 DP 的需求 (?)
// 記錄最小的數字 跟 當前最大的利潤
// 當有更小的數字更新最小數字 , 當有更大利潤更新最大利潤
// 結尾 return max profit , 結束

var maxProfit = function(prices) {
    if(prices.length<2)
        return 0;
    let min = prices[0];
    let profit = 0;
    for(let i=0;i<prices.length;i++){
        if(min > prices[i])
            min = prices[i];
        if( prices[i] - min > profit)
            profit = prices[i] - min;
    }
    return profit;
};