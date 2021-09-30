/**
 * @param {string} s
 * @return {number}
 */

// 2021/9/30 14:09 AC
// 97.78%(time) 
// input : s(string)
// 目的 : s 是羅馬式數字表示法 , 把它轉換成整數
// 規則就大概是這樣
/*
    'I':1,
    'V':5,
    'X':10,
    'L':50,
    'C':100,
    'D':500,
    'M':1000,
    'IV':4,
    'IX':9,
    'XL':40,
    'XC':90,
    'CD':400,
    'CM':900
*/

// 反正就宣告轉換表 , 然後照順序轉換 , 沒碰到 error
// 不知道有沒有別的做法 , 感覺這樣有點太直觀了(現在事情太順利都會懷疑自己是不是漏了什麼)

var romanToInt = function(s) {
    let convert ={
        'I':1,
        'V':5,
        'X':10,
        'L':50,
        'C':100,
        'D':500,
        'M':1000,
        'IV':4,
        'IX':9,
        'XL':40,
        'XC':90,
        'CD':400,
        'CM':900
    };

    let num = 0 ;

    for(let i=0;i<s.length;i++){
        if(s[i+1]){
            let cut = s.substring(i,i+2);
            if(cut == "IV" || cut == "IX" || cut == "XL" || cut == "XC" || cut == "CD" || cut == "CM" ){
                num += convert[cut];
                i++;
            }else {
                num += convert[s[i]];
            }
        }else{
            num += convert[s[i]];
        }
    }

    return num;

};