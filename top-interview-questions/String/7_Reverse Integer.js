/**
 * @param {number} x
 * @return {number}
 */

// 2021/9/21 14:54 AC
// 76.03%(time)
// input : x , -2^31 <= x <= 2^31 - 1
// 數字反轉 , 如果"反轉後"的數字超出 int 32 的話 return zero 
// 用傳統的 loop %10 /10 法來解 (因為我目前也想不到其他做法)
// 因為 js 做 / 都會自動變成 float , 所以針對正負數要分別用 floor 跟 ceil 來取每次的整數

// 感覺判斷式有點多了,不知道條件能不能寫得更簡潔一點

var reverse = function(x) {
    
    let ans = 0;
    while( x != 0){
        let temp = x % 10;
        ans += temp;
        if(x>0)
            x = Math.floor(x / 10);
        else
            x = Math.ceil(x / 10);
        if(x==0)
            break;
        ans *= 10;
    }
    if( ans > 2147483647 || ans<-2147483648)
        return 0;
    return ans;
};

num = 1534236469;
console.log(reverse(num));
