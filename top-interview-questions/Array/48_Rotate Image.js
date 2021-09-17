/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */

// 2021/9/17 20:25 AC
// 97.37%(time) 
// input : matrix (一個方陣 => 行列一樣的矩陣)(這裡是 js 的二階矩陣)
// 目的 : 把矩陣旋轉 90 度
// 解法 : 轉置矩陣 (行列互換) 後再 row reverse , 就是旋轉 90度了
// ( 可能要去重讀線性代數 )

var rotate = function(matrix) {

    // i for row
    // j for column
    
    // 第一層迴圈取 行或列 數
    // 因為是方陣 matrix.length 就是 行 數了
    // 第二層迴圈設為 j < i 就剛好可以做出 
    // i = 0 , j = 0 | 0,0 
    // i = 1 , j = 0 | 1,0 0,1 對調
    // i = 2 , j = 0 | 2,0 0,2 對調
    // i = 2 , j = 1 | 2,1 1,2 對調
    // ...

    for(let i=0;i<matrix.length;i++){
        for(let j=0;j<i;j++){
            let temp = matrix[j][i];
            matrix[j][i] = matrix[i][j];
            matrix[i][j] = temp;
        }
    }

    // 後再 row reverse , 結束

    for(let k=0;k<matrix[0].length;k++){
        matrix[k].reverse();
    }
    
};