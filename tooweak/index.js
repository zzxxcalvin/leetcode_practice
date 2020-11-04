
function DigitsSum(num){
    let sum = 0;
    while(num > 0){
        sum += num%10;
        num /= 10;
        num = Math.floor(num);
    }
    return sum;
}

console.log(DigitsSum(1234));


// 判斷等差數列
// function func(arr){
//     if(arr.length<=1)
//         return true;
    
//     let num = arr[1]-arr[0]
//     for(let i=2;i<arr.length;i++){
//         if(arr[i]-arr[i-1] !=num){
//             return false;
//         }
//     }
//     return true;
// }
// let arr = [1]
// console.log(func(arr));