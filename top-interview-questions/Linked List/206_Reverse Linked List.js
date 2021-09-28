/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

// 2021/9/28 13:57 AC
// 42.55%(time) 92.48%(memory)
// input : head (ListNode)
// 目的 : 給定一個 Linked List , return 逆轉的 Linked List
// 解法 : 走完一遍 Linked List , 用一個 array 儲存所有元素
// array 反向遍歷 , 建立一個新的 Linked List 
// end

// 原本以為這樣空間會很糟 ,結果還有 92% (?) 
// 現在想想好像可以不用 array 直接建新的 List , 空間搞不好更小 


var reverseList = function(head) {
    
    if(!head)
        return head;
    
    let arr = [];
    let dummy = new ListNode(0);
    let node = dummy;

    while(head){
        arr.push(head.val);
        head = head.next;
    }

    for(let i = arr.length - 1 ; i >= 0 ; i--){
        dummy.next = new ListNode(arr[i]);
        dummy = dummy.next;
    }

    return node.next;

};