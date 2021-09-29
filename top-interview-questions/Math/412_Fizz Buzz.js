/**
 * @param {number} n
 * @return {string[]}
 */

// 2021/9/29 15:31 AC
// 86.58%(time)
// input : n(int)
// 目的 : FizzBuzz , 輸入 n , return 一個陣列是 1 ~ n 
// 但是如果 n 可以被 3 整除 , 輸出 Fizz , 可以被 5 整除輸出 Buzz , 可以被 3跟5整除 輸出 FizzBuzz
// 很直觀 , 就看程式碼 , 主要是輸出陣列裡面的都是 String , 所以要對數字做 toString

var fizzBuzz = function(n) {
    let arr = [];
    for(let i=1;i<=n;i++){
        if( i%15 == 0 ){
            arr.push('FizzBuzz');
        }else if(i%3==0){
            arr.push('Fizz');
        }else if(i%5==0){
            arr.push("Buzz");
        }else{
            arr.push(i.toString());
        }
    }
    return arr;
};