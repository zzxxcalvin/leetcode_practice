/**
 * @param {string} s
 * @return {boolean}
 */

// 2021/9/21 17:59 AC
// 99.89%(time)
// input : s(string)
// Palindrome 回文字 , 檢查輸入字串是不是回文字(輸入的字串會包含空格,底線,標點符號 , 比對不管大小寫)
// 第一步先用 regex 去掉全部非字母的東西
// 然後用 length/2 加上一個 j backtracking 做比對
// 比對到不同就 return false 

var isPalindrome = function(s) {
    // regex 紀錄一下 : gi (全域比對忽略大小寫)
    // /W 其實也可以全去符號跟空白,可是_不會被去掉,所以要寫成[^0-9a-z]
    s = s.replace(/[^0-9a-z]/gi,'').toLowerCase();

    for(let i=0 ; i<s.length/2 ; i++){
        let j= s.length-i-1;
        if(s[i] != s[j]){
            return false;
        }
    }
    return true;
};

s = "A man, a plan, a canal: Panama";
console.log(isPalindrome(s));
