/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */

// 2021/9/28 12:46 AC
// 91.66%(time)
// input : node (Listnode)
// 目的 : 目標是刪除給定的 Singly Linked List 中的其中一個 node
// 但是 input 直接給目標 node , 沒辦法 access 目標 node 之前的 node 
// 那怎麼刪 ? 那就不刪 , 把所有人的值改成它的 next 的值 , 然後把最後一個 node 刪掉
// end 

var deleteNode = function(node) {
    
    while(node.next.next){
        node.val = node.next.val;
        node = node.next;
    }
    node.val = node.next.val;
    node.next = null;
};