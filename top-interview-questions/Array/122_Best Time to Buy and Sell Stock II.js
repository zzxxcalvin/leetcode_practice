/**
 * @param {number[]} prices
 * @return {number}
 */

// 2021/9/15 16:34 AC

// 題目 : 陣列 index 代表的是物品第i天的價格 
// ex:[1,3,2,4,5,6] 

/*

6                    ___
5                 ___
4              ___            
3       ___
2           ___
1    ___
*/

// 任一天都可以買進或賣出物品,求可以取得的最大利潤

// input : prices 陣列
// 暴力解O(n(n-1))
// 只有今天比明天便宜的時候買(才進入第二層迴圈比價) , 這部分用if確認i+1存不存在(null),不存在就結束了
// 用 buy_p 代表進入點的價格
// max 代表的是從 buy_p 到陣列結束為止,最高可得利潤為多少
// 雙層迴圈,兩兩比價
// 第二層迴圈中,如果有比到更低的就代表又有下降價格(代表已經到當前區段最高利潤),跳出比價
// 用一個 index 來儲存目前最高的利潤是跟哪一天相比
// 完成一次買賣,把利潤加入 total , 並且把天數移到賣出的天數 (i = max_i) , i++ =>隔天的價格


// var maxProfit = function(prices) {
    
//     let buy_p;
//     let total=0;
//     for(let i=0;i<prices.length;i++){
//         buy_p=prices[i];
        
//         let max = 0;
//         let max_i=i;

//         for(let j=i;j<prices.length;j++){
//             if(prices[i+1]!=null){
//                 if(prices[i]>=prices[i+1])
//                     continue;
//             }
//             if(prices[j]-buy_p >0 && prices[j]-buy_p >=max){
//                 max = prices[j]-buy_p;
//                 // console.log(prices[j],buy_p);
//                 max_i = j;
//                 // console.log(max,j);
//             }
//             else if(max > 0 && prices[j]-buy_p < max){
//                 break;
//             }
//         }
        
//             i = max_i;
        
//         total += max;
//     }
//     return total;
// };

// 2021/9/16 17:57 二解 AC
// 51.62%
// 因為每當比前一天高的時候都可以賣出(前一天買入)
// 只要計算所有 i > i-1 的差值再加總即可 

var maxProfit = function(prices){

    let profit = 0;
    
    for(let i = 1 ; i<prices.length ;i++ ){
        if(prices[i]>=prices[i-1]){
            profit += ( prices[i]-prices[i-1] );
        }
    }
    return profit;
}