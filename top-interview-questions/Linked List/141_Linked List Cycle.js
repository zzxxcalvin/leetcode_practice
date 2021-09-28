/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */

// 2021/9/28 16:22 AC
// input : head(ListNode)
// ** judge 的 input 裡其實有一個 n , 代表是 cycle 出現的位置的 index **
// 目的 : 求 LinkedList 中是否有 cycle 
// cycle : 我原本以為 cycle 一定是 tail.next 直接接到 head , 結果是 tail.next 可能接到中間任何一個 node 上去
// 反正現在是搞懂了

// 解法 : 快慢指針
// 快慢指針應該是為了這類型題目出的了 , 我在猜以後是不是會有題目考 cycle 的位置
// 用一個 slow 1 fast 2 的快慢指針
// 檢查如果 slow 跟 fast 相等 就 return true (有 cycle 的話 , 1.2指針一定會有走到同一個點的時候)
// fast == null 會離開迴圈 , 就 return true 了
// end

var hasCycle = function(head) {

    let slow = head;
    let fast = head;
    while(fast && fast.next){
        slow = slow.next;
        fast = fast.next;
        if(slow == fast)
            return true;
    }

    return false;

};