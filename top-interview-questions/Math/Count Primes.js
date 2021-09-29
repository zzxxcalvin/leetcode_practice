/**
 * @param {number} n
 * @return {number}
 */

// 2021/9/29 AC(*)
// 參考解答
// https://javascript.plainenglish.io/algorithms-101-count-primes-in-javascript-97f1ff85e040

var countPrimes = function(n) {
    let nums = [...Array(n).keys()];
    // 那個 "..."" => 展開運算符與其餘運算符(都是點點點)
    //https://eyesofkids.gitbooks.io/javascript-start-from-es6/content/part4/rest_spread.html

    for(let i=2;i*i<n;i++){
        if(nums[i]!=0){
            for(let j = i*i ; j<n ; j+=i){
                nums[j]=0;
            }
        }
    }

    let count = 0;
    for(let i=2;i<n;i++){
        if(nums[i])
            count++;
    }
    return count;

};