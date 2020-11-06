


/**
 * @param {string} s
 * @return {string}
 */


// 此方法會導致超時
// var isPalindromic = (str)=>{
//     return str === str.split('').reverse().join('');
//     // str split('') 會將字串中所有字拆開成為陣列
//     // reverse 為陣列有,字串沒有的 function ,會將陣列元素全部反轉
//     // str joing('') 會將陣列直接組合成字串

// }

// 2020/11/6 17:00 AC

// 判斷是否為回文字串
// 手動從 i = 0 開始每次取出頭尾比較
// 終止條件為 i > 一半時,表示檢查完所有元素了
// 這樣複雜度應該是 O(n/2) (吧?)

const isPalindromic = (s) => {
    const center = Math.floor(s.length / 2);
    for(let i = 0; i <= center; i += 1) {
      if(s[i] !== s[s.length - 1 - i]) {
        return false;
      }
    }
    return true;
}  


var longestPalindrome = function(s) {
    
    if(!s)
        return 0;
    // Max 用作紀錄最長的長度
    let max = 0;
    let ans = {};


    // 解題方式
    // 第一個迴圈:
    //  每次取出當前 i 到最後的子字串
    //  (若當前紀錄的 max 已經大於 i~結尾的長度,直接終止迴圈)
    //  第二個迴圈:
    //      從最尾端跟當前 i 開始的部分剪成子字串
    //      用 isPalindromic 判斷當前的子字串是不是回文
    //      是的話紀錄長度 , 然後把答案更新成當前子字串
    //      若當前的總長度已經小於記錄過的 max 長度 , 直接結束迴圈    
    
    for(let i=0;i<s.length;i++){
        let sub = s.substring(i,s.length);
        if(max>=sub.length)
            break;
        for (let j=sub.length;j>0;j--){
            if(max >= j)
                break;
            let sub2 = sub.substring(0,j);
            if(isPalindromic(sub2)){
                max = sub2.length;
                ans = sub2;
            }
        }
    }

    return ans;
};

let str1 = "kyyrjtdplseovzwjkykrjwhxquwxsfsorjiumvxjhjmgeueafubtonhlerrgsgohfosqssmizcuqryqomsipovhhodpfyudtusjhonlqabhxfahfcjqxyckycstcqwxvicwkjeuboerkmjshfgiglceycmycadpnvoeaurqatesivajoqdilynbcihnidbizwkuaoegmytopzdmvvoewvhebqzskseeubnretjgnmyjwwgcooytfojeuzcuyhsznbcaiqpwcyusyyywqmmvqzvvceylnuwcbxybhqpvjumzomnabrjgcfaabqmiotlfojnyuolostmtacbwmwlqdfkbfikusuqtupdwdrjwqmuudbcvtpieiwteqbeyfyqejglmxofdjksqmzeugwvuniaxdrunyunnqpbnfbgqemvamaxuhjbyzqmhalrprhnindrkbopwbwsjeqrmyqipnqvjqzpjalqyfvaavyhytetllzupxjwozdfpmjhjlrnitnjgapzrakcqahaqetwllaaiadalmxgvpawqpgecojxfvcgxsbrldktufdrogkogbltcezflyctklpqrjymqzyzmtlssnavzcquytcskcnjzzrytsvawkavzboncxlhqfiofuohehaygxidxsofhmhzygklliovnwqbwwiiyarxtoihvjkdrzqsnmhdtdlpckuayhtfyirnhkrhbrwkdymjrjklonyggqnxhfvtkqxoicakzsxmgczpwhpkzcntkcwhkdkxvfnjbvjjoumczjyvdgkfukfuldolqnauvoyhoheoqvpwoisniv";
let str2 = "aacabdkacaa";
let str = ['h','e','l','l','o'];
console.time('s');
let ans = longestPalindrome(str1);

console.log(ans);
console.timeEnd('s');