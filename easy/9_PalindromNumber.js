/**
 * @param {number} x
 * @return {boolean}
 */

// 2020 19:16 AC

// 將數字反轉後再比對
// 相等就 true , 否則 false ,負值則直接 false
var isPalindrome = function(x) {
    if(x<0)
        return false;
    let rev = reverse(x);
    if(rev === x)
        return true;
    return false;
};

// 直接從 7_reversenumber 拿過來用
var reverse = function(x) {
  let str = x.toString();
  str = str.split('').reverse().join('');
  let ans = parseInt(str);

  if(ans > 2147483647 || ans <-2147483646)
    return 0;
  if(x < 0)
    return -ans;
  return ans;
};