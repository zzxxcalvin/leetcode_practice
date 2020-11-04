const util = require('util')
// 用作顯示 console.log 的所有東西

// 這個是以 function 作為 class 的 constructor 
function ListNode(val) {
    this.val = val;
    this.next = null;
}
// 詳細可以去看看 ../js_datastructure/new_adn_prototype.js 裡面

let val = new ListNode(5);
let val2 = new ListNode(6);
let val3 = new ListNode(8);

let val4 = new ListNode(2);
let val5 = new ListNode(4);
let val6 = new ListNode(6);

val.next = val2;
val2.next = val3;

val4.next = val5;
val5.next = val6

// 2020/11/4/19:28 AC
// 作法看內部註解

var addTwoNumbers = function(l1, l2) {

    // 宣告一 node 作為往 next 推進 (node = node.next) 的節點
    // 宣告一 list 保有第一個節點

    let node = new ListNode(0);
    let list = node;
    let carry = 0;

    //當 l1 or l2 or carry 有值時便需進行加法
    while( l1 || l2 || carry){

        // 每次迴圈開頭將 sum 歸零

        let tmp_sum = 0;

        // 檢查 l1 及 l2 是否為 null 再進行加法
        // 如果嘗試 accees null.value 會出現 error 

        if(l1 != null){
            tmp_sum += l1.val;
            l1 = l1.next;
        }
        if(l2 != null){
            tmp_sum += l2.val;
            l2 = l2.next;
        }

        // 加上 carry 後將 carry 歸零 , 避免無限迴圈

        tmp_sum += carry;
        carry = 0;
        
        // 檢查是否產生 carry
        if(tmp_sum >= 10)
            carry = 1;

        // 將 sum %10 後用於產生新node
        // 將 node 指向 node.next , 準備下一圈迴圈
        tmp_sum = tmp_sum % 10;
        node.next = new ListNode(tmp_sum);
        node = node.next;
    }
    // 因為 list 所保有的節點為初始追蹤用 , 故回傳 list.next 才為開始加法的第一節點
    return list.next;
};

let ans = addTwoNumbers(val,val4);
console.log(util.inspect(ans,{showHidden:false,depth:null}));