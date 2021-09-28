/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

// 2021/9/28 15:26 AC
// 99.91%(time)
// input : l1 , l2 (ListNode)
// 目的 : 1l , l2 是排序好的 Linked List , 將他們 merge 在一起後 return
// 解法 : 宣告一個新的 node , 然後每次比較 l1 l2 , 比較小的就接到 node.next , 再把比較小的那邊指向 next
// 這邊就注意 在接 next 的時候的順序跟邏輯就好 , 多看幾遍 code
// 如果碰到其中一個走到 null 了 , 就把 node.next 直接指向剩下的另一個 list 就好了

// 不過這邊用的 while 迴圈條件我不知道是不是有點多餘 , 這樣好像跟 while 1 差不多


var mergeTwoLists = function(l1, l2) {

    if(!l1 && !l2)
        return null;
    else if(!l1)
        return l2;
    else if(!l2)
        return l1;

    let node = new ListNode(0);
    let head = node;
    let temp ;

    while(l1 || l2){
        
        if(!l1){
            node.next = l2;
            return head.next;
        }else if(!l2){
            node.next = l1;
            return head.next;
        }

        if(l1.val >= l2.val){
            temp = l2 ;
            l2 = l2.next;
            temp.next = null;
            node.next = temp;
            node = node.next;
        }else{
            temp = l1 ;
            l1 = l1.next;
            temp.next = null;
            node.next = temp;
            node = node.next;
        }
        
    }
    return head.next;
};