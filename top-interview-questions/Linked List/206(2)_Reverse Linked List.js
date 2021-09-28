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

// 2021/9/28 14:31 AC
// 62.41%(time) 28.01(memory)
// input : head (ListNode)
// 目的 : 給定一個 Linked List , return 逆轉的 Linked List

// 這是第二解 , 因為看到人家這樣做覺得有點酷 , 所以也跟著解了一次
// 看起來時間快了一些 , 空間反而差得多了 , 但我不知道為什麼
// * check 了一下90幾%的 , 寫法應該跟這個方法一樣 , 可以當作這是最佳解了

// 解法解釋 : 我想到我的小腦袋都快爆炸了 , 多看幾遍 , 真的很難記

// 因為 Linked List 是一個一個指向 next , 那如何邊走邊反轉呢 ? 
// 這需要一個指針來幫我們做這件事
// 首先把指針 cur 指向 head.next 
// 然後把 head.next 砍掉 (head.next = null) 
// 再來宣告一個 temp = cur.next ,暫存 cur.next
// 把 cur.next 指向 head 
// 把 head = cur 
// 把 cur 變回 temp 

// 會很難思考是因為會被變數名稱搞混
// 這邊做的事情實際上是 :

//    先用一個新節點 cur 把 head.next 暫存起來 , cur 代表的是 切掉原本的 head 之後的整個 Linked List
//    把 head.next = null , 這邊代表的是把第一個節點切了出來 , 它變成獨立的節點 , 前後都沒有了

// *再用一個 temp 複製 cur.next , 代表複製了除了第二個節點之外的剩下的 Linked List
// *再把 cur.next 指向 head , 代表的是 把第二個節點的 next 指向第一個節點 , 實際上就變成了順序調換的前兩個 node
// *接著把 head 的變數意義 assign 回 cur , 這邊代表著 head 是這個新的 Linked List 的 head (目前只有兩個成員)
// *再把 cur 的變數意義 assign 成 temp , 這邊 cur 又變回了剩下的整個 Linked List

// 開始 loop 上面這些步驟直到 cur 已經指到了 null , 代表最原本的 Linked List 走到底了
// 這樣每次都會按照原本的順序 反向的把一個 node.next 指向他原本的前一個節點
// 而 head 會永遠保持在新加入的 node 上
// 因此最後直接 return head , head 就會剛好指在原本的最後一個 node , 現在的第一個 node 之上了

var reverseList = function(head) {
    
    if(!head || !head.next)
        return head;
    
    let cur = head.next;
    head.next = null;

    while(cur){
        let temp = cur.next;
        cur.next = head;
        head = cur;
        cur = temp;
    }
    
    return head;

};