/**
 * @param {number} x
 * @return {number}
 */

// 2020/11/6 19:10 AC

// 把 x 轉成 string 後直接反轉 再 parseInt 回來之後回傳
// 若原本的數字小於0 , - 在 parseInt 會被刪除 , 故回傳時檢查後回傳負值
// 題目規定上下限為 2147383647 與 -2147383646 , 大/小於極限值則回傳 0

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

let t= '012';
let num = parseInt(t);
// console.log(num);

let tmp = 12005;

let ans = reverse(tmp);

console.log(ans);