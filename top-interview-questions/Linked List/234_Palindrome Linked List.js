/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */

// 2021/9/28 16:09 AC
// 79.98%(time) 81.83%(memory)
// input : head (ListNode)
// 目的 : 給定一個 Linked List , 檢查是否為 回文 list (true/false)
// extra : 可不可以 O(n) 解 然後只使用 O(1) 空間 ?
// 解法 : 這題最佳解不可以使用 n 大小的空間 , 所以就只能用常數
// 這邊要用到兩個東西 :
// 1. 快慢指針找中間的數
// 2. 反轉 Linked List 

// 快慢指針 就是用 slow 1 fast 2 就可以了 , 當(!fast || !fast.next)的時候 retrun slow 
// 這時候不管 List 中有單數複數 , 都會取得後半的第一個 node (單數的話就是取得正中間那一個node的下一個node)

// 反轉 Linked List , 可以直接看 206(2) , 不過這個貌似以後會一直用到 , 可能要記下來

// 這邊的做法就是將 list 取得 middle node , 接著進行反轉取得 反轉的List
// 然後走訪 前半List 跟 反轉List 比對 , 只要有不同就 return false , 走完就 return true;
// 這樣應該是 O(n)時間 (反轉1/2n + 走訪 1/2n) 跟 O(1)memory (只用常數變數) 才對


var isPalindrome = function(head) {

    if(!head || !head.next)
        return true;

    let mid = findMid(head);
    let revNode = revLinkedList(mid);

    while(revNode){

        if(head.val != revNode.val){
            return false;
        }
        head = head.next;
        revNode = revNode.next;
    }
    return true;

    function findMid(node){
        let slow = node;
        let fast = node;

        while(fast && fast.next){
            slow = slow.next;
            fast = fast.next.next;
        }
        return slow;
    }

    function revLinkedList(node){
        if(!node || !node.next)
            return node;

        let next = node.next;
        let head = node;
        head.next = null;
        
        while(next){
            let temp = next.next ;
            next.next = head;
            head = next;
            next = temp;
        }
        return head;
    }
    
};