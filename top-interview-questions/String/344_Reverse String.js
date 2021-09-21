/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */

// 2021/9/21 14:11 AC
// input : a[array]
// 目的 : 這題是字串反轉,輸入給的是已經切好的 char array (所以直接少一個 split 動作)
// 可以直接用 reverse 來轉矩陣 , 不過感覺太廢了 (但這樣真的有比較不好嗎 ? 其實我也不確定)
// 題目希望不要使用額外的 n , 用兩個 constant 應該還行吧(?)
// 一個 temp 存當前 , 一個 j 做backtracking
// 每次都將頭尾交換 , index 只做到 1/2 (雙數數量就全部交換,單數數量正中間那個反正不用換)
// js 內建的 / 會有小數點 , 不過不影響這邊的結果

var reverseString = function(s) {
    let len = s.length;

    for(let i=0;i< len/2;i++){
        let temp = s[i];
        let j = len - i - 1;
        s[i] = s[j];
        s[j] = temp;
    }
    // console.log(s);
    return ;
};


s = ['a','p','p','l','e'];
reverseString(s);