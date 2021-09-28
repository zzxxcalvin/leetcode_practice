/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */

// 2021/9/28 13:33 AC
// 99.21%(time)

// input : head(ListNode) , n(int)
// 目的 : 給定 n 跟 Linked List , 刪除 Linked List 中倒數第 n 個 node

// 解法 : 快慢指針 , 快慢指針都從 head 開始 , 先把快指針往前走 n 步 , 這樣快慢指針就會差 n 個數
// 再讓快慢指針一起前進 , 直到 快指針自己 走到 null , 但是這樣 慢指針 最後會剛好停在要刪除的節點上
// 而 listnode 是沒辦法單純刪除自己的(除了全部更新為next 然後去除 tail , 但那樣太耗時了)
// 因此加入一個 dummy node 在 head 之前 , 並且慢指針從 dummy node 開始走 , 這樣慢指針就會剛好停在要刪除的前一個節點
// 就可以用 node.next = node.next.next 直接跳過(刪除)目標節點
// 最後 return dummy.next (head 的部分)

var removeNthFromEnd = function(head, n) {
    
    if(!head)
        return head;
    
    let dummy = new ListNode(0);
    dummy.next = head;
    
    let slow = dummy,
    fast = head;

    while(n>0){
        fast = fast.next;
        n--;
    }

    while(fast){
        fast = fast.next;
        slow = slow.next;
    }

    slow.next = slow.next.next;
    
    return dummy.next;
};