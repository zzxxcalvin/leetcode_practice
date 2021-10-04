/**
 * @param {string} s
 * @return {boolean}
 */

// 2021/10/2 20:03 AC
// 49.51%(time) 53.90%(space)
// input : s(string)
// 目的 : 本題輸入只會是由 {} [] () 組成的字串
// 檢查是否每一個 括號 都有按照順序關上
// ex: "{}()[]" -> true , "{[}]" -> false

// stack 資料結構運用(如果在C寫的話啦)
// 因為 js 的 array 就有很多內建函式可以用了 , 但還是寫成類似 stack 的處理模式
// 每次讀取都先檢查是否是 後半括號 , 是的話就檢查是否能跟目前 stack 最新元素達成 match 並且關上
// 只要一次錯誤就 return false , 成功 match 的話 array 就 pop
// 迴圈執行完成就 stack size 是否為0 , 代表全部括號都 match 完成了 return true
// 反之 return false

var isValid = function(s) {
    let stack = [];
    for(let i=0;i<s.length;i++){
        if(s[i]=="}" || s[i]==")" || s[i] == "]"){
            if(stack[stack.length-1]){
                let match = stack[stack.length-1].concat(s[i]);
                if(match =="{}" || match == "()" || match == '[]'){
                    stack.pop();
                    continue;
                }else{
                    return false;
                }
            }else{
                return false;
            }
        }
        stack.push(s[i]);
    }
    if(stack.length>0)
        return false;
    return true;
};