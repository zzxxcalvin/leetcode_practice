/**
 * @param {string[]} strs
 * @return {string}
 */

// 2020/9/23 18:41 AC
// 92.25%(time)
// input : strs (string[] )
// 目的 : Longest common prefix , 最長相同開頭
// 正向搜尋最長相同開頭 
// 如果沒有就 return ''
/*
 *
    Friendly Reminder  str.substring(0,1) => 擷取 0~1 不包括 1 的字串
 *
 */ 

// 直接完整的拿第一個字當 longest common prefix (lcp)
// 從 1 開始 loop strs[] , 當strs[i] 比 lcp 的長度長時 , 直接裁成一樣長度
// 把 strs[i] 裁成 跟當前 lcp 一樣的長度
// 比較兩者是否相同 , 不同就繼續裁
// 長度歸 0 就 return '' , 兩者相同就 break 進入下一個字

// 同樣方法可以用在 longest post fix , 但不論前後求字串中間最長相等我可能就沒轍了 


var longestCommonPrefix = function(strs) {
    
    let lcp = strs[0];
    let len = lcp.length;
    for(let i=1;i<strs.length;i++){

        while(1){
            let word = strs[i];
            if(len > word.length){
                len = word.length ;
                lcp = lcp.substring(0,len);
            }
            word = word.substring(0,len);

            if( word != lcp ){
                len--;
                lcp = lcp.substring(0,len);
                word = word.substring(0,len);
                // console.log(lcp,word);
            }else{
                break;
            }

            if(len == 0){
                return '';
            }
        }    
    }
    return lcp;
};

let strs = ["dog","doa","doged"]
a = longestCommonPrefix(strs);

console.log(a);