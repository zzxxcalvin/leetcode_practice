/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */


// 2020/11/6 18:40 AC

// 題目範例:
// Input: s = "PAYPALISHIRING", numRows = 4
// Output: "PINALSIGYAHRPI"
// Explanation:
// P     I    N
// A   L S  I G
// Y A   H R
// P     I

// 我覺得畫成這樣清楚一點
// P     I     N
//  A   L S   I G
//   Y A   H R
//    P     I

var convert = function(s, numRows) {
    
    if(numRows<2)
        return s;

    let len = s.length;
    
    // 預先為每一行填上''確保後面串接字串
    // 若是宣告 new Array , 下面使用 += s[i] 的時候初始位置會留下一個undefined
    let arr = Array(numRows).fill('');
    // Array 中 [key] key代表的是要填入的行數,每一個 arr[i] 看作一整行的字串
    // 下面使用 += s[i] 直接將每一行要填出的字元串接上去

    // 規律為 numRows * 2 - 2 , 須將前面幾次畫出來才可以看出來
    let cycle = numRows * 2 - 2 ;
    let line;

    for(let i = 0; i < len; i++){
        // 使用 line 來判斷需要填入的行數
        line = i % cycle;

        // 如果 Line > numRows -> 往回走
        if(line < numRows ) {
            arr[line] += s[i]; 
        } else {
            // 透過上面的範例圖, i % cycle 大於 numrows需要反向選擇行數
            // 需要扣掉的是 cycle - 原本要填入的 line , 所以便是 cycle - line
            arr[cycle - line] += s[i];
        }
    }
    // 將 numRows 行組合在一起成為新的字串 
    arr = arr.join('');

    return arr;
};

let tmp = "PAYPALISHIRING";
let ans = convert(tmp,4);
console.log(ans);
