/**
 * @param {number[]} digits
 * @return {number[]}
 */

// 2021/9/17 17:43 AC
// input: digits(array)
// 目的 : digits每個位置就是一位數,開頭不會有0,題目求最後一位數+1後的陣列
// 需要考慮的點是會不會有 carry , 這邊從最後一位數開始for-loop , 每次檢查是否進位 , 不須進位就 +1 後return 
// 如果在第一位數需要進位,進位後 unshift(1) return 答案
var plusOne = function(digits) {
    
    for(let i =digits.length-1;i>=0;i--){
        if(i==0 && digits[i]==9){
            digits[i] = 0;
            digits.unshift(1);
            return digits;
        }
        else if(digits[i]< 9){
            digits[i] +=1;
            return digits;
        }
        else{
            digits[i]=0;
        }
    }
};

let arr = [9]
console.log(plusOne(arr));