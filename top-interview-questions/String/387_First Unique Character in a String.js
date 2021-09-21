/**
 * @param {string} s
 * @return {number}
 */

// 2021/9/21 AC
// 68.10%(time)
// input : s(string)
// 目標 : 求字串中 "第一個" "只出現一次" 的字元
// for loop s 用 Map 紀錄出現次數
// js 的 Map 會依照 set 順序排列 (沒有本身的 index 就是了,但是 foreach 的時候會照順序)
// 用 foreach 檢查每一個元素 (這邊的 foreach item , item[0]是 key, item[1]是 value)
// 檢查到 value = 1 (只出現一次的元素) 的時候就 return s.indexOf 

// 應該是 O(n^2) (迴圈一次 n , indexOf(搜尋)一次 n )


var firstUniqChar = function(s) {
    let map_ = new Map();
    for(let i=0;i<s.length;i++){
        if(map_.has(s[i]))
            map_.set( s[i] , map_.get(s[i]) + 1 );
        else
            map_.set(s[i],1);
    }

    for(let item of map_){
        if(item[1]==1){
            return s.indexOf(item[0]);
        }
    }
    return -1;

};

let s = "loveleetcode";
// let s = new Map();
// s.set(1,'hello');

// for(let item of s){
//     console.log();
// }


console.log(firstUniqChar(s));