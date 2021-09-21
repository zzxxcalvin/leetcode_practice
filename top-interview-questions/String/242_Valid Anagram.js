/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

// 2021/9/21 15:44 AC
// 51.66%(time)
// input : s(string) , t(string)
// Anagram => 兩個字的長度相同,並且使用同樣數量的字元組成 ex:apple lppae (a*1 p*2 l*1 e*1)
// 做法: 檢查長度,不同直接 false 
// 兩個都加入 map 計算數量 , 最後用 map1 的 key 比較數量 , 只要不一樣就 false  

var isAnagram = function(s, t) {
    // 檢查長度 , 不同就一定 false
    if(s.length != t.length)
        return false;

    let map1 = new Map(),map2 = new Map();
    
    // Map1
    for(let i = 0;i<s.length;i++){
        if(map1.has(s[i])){
            map1.set( s[i] , map1.get(s[i]) + 1 );
        }
        else{
            map1.set( s[i] , 1 );
        }
    }

    // Map2
    for(let i = 0;i<t.length;i++){
        if(map2.has(t[i])){
            map2.set( t[i] , map2.get(t[i]) + 1 );
        }
        else{
            map2.set( t[i] , 1 );
        }
    }

    // console.log(map1,map2);

    // 比較 字元 出現次數
    for(let item of map1){
        if(item[1] != map2.get(item[0])){
            return false;
        }
    }


    return true;

};

let s="anagram",t="nagaram";

console.log(isAnagram(s,t) );