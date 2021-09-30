/**
 * @param {number} numRows
 * @return {number[][]}
 */

// 2021/9/30 16:54 AC
// 49.96%(time)
// input : numRows(int)
// 目的 : return 到 numRows 為止的 帕斯卡三角形
/*
　　　　　　　　１
　　　　　　　１　１
　　　　　　１　２　１
　　　　　１　３　３　１
　　　　１　４　６　４　１
　　　１　５　10　10　５　１
　　１　６　15　20　15　６　１
　１　７　21　35　35　21　７　１
１　８　28　56　70　56　28　８　１    
*/

// 三角形的規則就上面那樣

// 思考一下每一層的規則
// 用兩層迴圈來建構新的一層
// 搞清楚 index 怎麼抓應該就沒問題了

var generate = function(numRows) {
    if(numRows==0){
        return 0;
    }
    let pascal = [[1]];
    
    for(let i = 1;i<numRows;i++){
        pascal.push([1]);
        for(let j=0;j<pascal.length-2;j++){
            pascal[i].push(pascal[i-1][j] + pascal[i-1][j+1]);
        }
        pascal[pascal.length-1].push(1);
    }

    return pascal;
};