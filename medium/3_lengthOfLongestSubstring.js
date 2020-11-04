

// 2020/11/4 20:23  first AC

// 解法見步驟 可以再優化
// 未使用特別的演算法

var lengthOfLongestSubstring = function(s) {

    // edge case ex: "",null
    if(!s)
        return 0;

    
    // 初始化長度、max 均為 1 並略過第一個字(方便 for 迴圈進行)
    let len = 1;
    let max = 1;
    let map = {};
    // 利用一個 Map 確認在該子字串中該單字尚未出現過,出現過則為 s[i] 為1
    map[s[0]] = 1;

    for(let i=1;i<s.length;i++){

        // 判斷該單字是否已出現在當前子字串中 
        if ( map[s[i]] != 1  ) {
                    len++;
                    map[s[i]]=1;
        }
        // 若發生重複 執行以下幾件事
        else {
            //若連續發生重複 ex : "abcdeeeee" , 則不往回推
            //否則將 index 指回發現重複時的下一個位置 ex: 'anviaj' , 便於重新計算長度
            if(s[i] != s[i-1])
                i = i-len+1;
            //重新初始化 len 以及對照 map
            len = 1;
            map = {};
            map[s[i]] = 1;
        }

        if( len >= max){
            // 如果該次 len 超越 max , 更新 max
            max = len;
        }
    }
    return max;
};

let s = "anviaj";

console.log(lengthOfLongestSubstring(s));