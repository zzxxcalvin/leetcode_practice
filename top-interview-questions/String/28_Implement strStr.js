/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */

// 2021/9/22 19:41 2 * AC
// input : haystack(string) , needle(string)
// 目標 : 在 haystack 中找尋 needle (在大字串中尋找小字串) 出現的開頭 index 
// 解法1 : 雙層迴圈 , 遍歷 haystack 跟 needle 的開頭比對
// 相等的時候開始 雙層迴圈遍歷 needle , 走完的話就 return 開頭 index
// 效率非常之差 , Judge 的 runtime 4480 ms (怕)

// 解法2 : 一樣找開頭相等 , 找到後 haystack substr 跟 needle 同長的 string 
// 直接 == 比較 
// 問題 : 這樣算是利用內建函式解決 , 只差沒有直接用 IndexOf ...

// 大小字串比對的演算法解法 : KMP 演算法
// 有朝一日需要的時候再去了解了 ... 


var strStr = function(haystack, needle) {
    if(needle.length > haystack.length)
        return -1;
    else if(!haystack || !needle)
        return 0;

    for(let i=0;i<haystack.length;i++){
        if(haystack[i] == needle[0]){
            for(let j=0; j<needle.length;j++){
                if(haystack[i+j]!=needle[j]){
                    break;
                }
                else if(j==needle.length-1){
                    return i;
                }
            }
        }
    }
    return -1;
    
};

let haystack = "hello", needle = "ll";
// console.log(haystack.length);
// a = strStr(haystack,needle);
// console.log(a);

var strStr_ = function(haystack, needle) {
    if(needle.length > haystack.length)
        return -1;
    else if(!needle)
        return 0;

    for(let i=0;i<haystack.length;i++){
        if(haystack[i] == needle[0]){
            let subs = haystack.substr(i,needle.length);
            if(subs == needle)
                return i ;
        }
    }
    return -1;
    
};

a = strStr_(haystack,needle);
console.log(a);