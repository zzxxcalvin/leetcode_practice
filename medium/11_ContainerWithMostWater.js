/**
 * @param {number[]} height
 * @return {number}
 */

// 2020/11/6 19:48 AC

// 直觀解決,從for loop 從 i = 0 開始
// 第二迴圈從最後面開始取出高度 , 與當前 i 相比較 , i > j 就取 i 的高度 ,反之取 j
// 與 j - i 相乘 , 再與當前 max 比較 , 更高則更新

var maxArea = function(height) {
    let h = 0;
    let max = 0;
    for (let i = 0 ;i < height.length;i++){
        for(let j = height.length - 1 ;j > i ;j-- ){
            if( height[i] >= height[j] ){
                h = height[j] * (j - i);
                // console.log(j);
                if(h >= max){
                    max = h;
                }
            } else if (height[i] <= height[j]){
                h = height[i] * (j - i);
                // console.log(j);
                if(h >= max){
                    max = h;
                }
            }
        }
    }
    return max;
};

let tmp = [1,2];
let ans = maxArea(tmp);

console.log(ans);