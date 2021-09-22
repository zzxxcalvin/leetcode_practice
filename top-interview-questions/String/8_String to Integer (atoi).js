/**
 * @param {string} s
 * @return {number}
 */

// 2021/9/22 18:52 AC
// 35.31%(time)
// input : s(string)
// 目標 : String to Integer , 字串轉換成數字 , 規定如下
// 1. 先去除到第一個有效字元前的所有開頭 white-space , 並接下來如果有出現 + - 則保留為結果的正負
// 2. 當執行遇到非 0~9 或 +- 的 char 後就停止執行(包括 a~z 數字間的 空白 等等)
// 3. 將途中連續出現的 0~9 char 轉換成 integer 
// 上下限 : 2^31-1 ~ -2^31

// 作法 : 先用 String.Prototype.trim 去掉前後的空白
// 檢查第一個字是不是 + - 號 , 是的話改變 sign 並去掉開頭
// 遍歷字串 , 用 charcode 轉換 char 成 數字 , 當碰到任何非 0~9 的 char 直接結束迴圈 , 回傳結果
// 按照題目規定跟寫法 , 有字母在數字前的字串只會回傳 0 ex:" hello world 12345" output : 0 

var myAtoi = function(s) {
    let sign = 1;
    let num = 0;
    s = s.trim();

    if(s[0]=='+'){
        sign = 1;
        s = s.slice(1);
        console.log(s);
    }else if(s[0]=='-'){
        sign = -1;
        s = s.slice(1);
    }
    for(let i=0;i<s.length;i++){
        if( 48 <= s.charCodeAt(i) && s.charCodeAt(i) <= 57 ){
            num *= 10;
            num += s.charCodeAt(i)-48;
        }else{
            break;
        }
    }
    
    num = num * Math.sign(sign);

    if( num > 2147483647){
        num = 2147483647;
    }
    else if(num < -2147483648){
        return -2147483648;
    }

    return num;
};