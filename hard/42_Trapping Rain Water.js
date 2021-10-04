/**
 * @param {number[]} height
 * @return {number}
 */

// 2021/10/4 11:01 AC
// input : height(number[])
// 目的 : number 陣列是一連串的數字 , 代表的是每一格柱子的高度  
//        當兩個柱子之間有比他們矮的柱子的時候 , 就可以困住雨水
//        計算給定的柱子高度陣列總共可以困住多少雨水
// (還是回去看題目的圖片會比較清楚)

// 想法 : 原本想說如果正向迴圈過去 , 然後檢查左右是不是比較大 , 但這樣可能會變成要保留一堆前面更高的柱子
// 透過觀察可以看到一個有趣的現象 , 整個題目也簡化不少
// 如果只找出最大的柱子 , 就可以直接把其他柱子切成左右兩邊 , 分別從 0 開始往前 , 以及從 結尾開始往回
// 他們之間的 高柱 與 低柱 之間的差 加總就剛好是雨水的量
// 作法 : 我們優先找出最高的柱子 , 然後在左右分別從 0 跟 結尾 都以 最高柱的index 為結束條件 開始迴圈
// 隨著 index 更新 左max 跟 右max , 因為我們已經找出了最高柱 , 所以左右max與中柱之間一定可以困住雨水
// 困住雨水的量 看得就只有 左右max以及比他們低的柱子的高度了

// (多看幾遍圖片應該就懂了 , 用這種解法整體簡單上不少 , 但不知道有沒有其他還是可以解決的辦法)

var trap = function(height) {

    let water = 0;

    let max = 0,maxIndex;

    for(let i=0;i<height.length;i++){
        if(max<=height[i]){
            max = height[i];
            maxIndex = i;
        }
    }
    
    let left_max = 0;
    for(let i=0;i<maxIndex;i++){
        if(left_max>height[i]){
            water += (left_max - height[i]);
        }else{
            left_max = height[i];
        }
    }

    let right_max = 0;

    for(let i=height.length-1;i>maxIndex;i--){
        if(right_max>height[i]){
            water += (right_max-height[i]);
        }else{
            right_max = height[i];
        }

    }

    return water;
};