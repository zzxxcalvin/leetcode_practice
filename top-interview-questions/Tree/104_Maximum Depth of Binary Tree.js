/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */

// 2021/9/24 18:46 AC
// 57.30%(time)
// input : root (TreeNode) (如上)
// 目的 : 題目 input 是一個 binary tree , 求樹的深度
// 用 recursive 的方式 , 當 node 為 null 時回傳 0
// 其他時候 return 1 + 左右子樹的深度 (當到最底時就會獲得 +1 的深度)
// ** 直接參考了其他人的解答 , 但是我還是沒搞懂這題的輸入跟 object 的運作方式


/*
    主要問題:
        我不知道這題的題目是怎麼宣告的
        leetcode 上面的 test input 看起來是 array
        console.log(node) 也是輸出一個 array
        但可以對 node console.log(node.left) 或是 node.right 
        會 output 出 子array (?)
        完全搞不懂到底是怎麼回事 = =
        我寫了一個 test 104 
        是用題目給的方式把 treenode 宣告成 new obejct 
        maxDepth run 起來也沒什麼問題 , 看起來也比較合乎我的理解
        但題目給的範例輸入我是真的不懂了
*/

var maxDepth = function(root) {
    if(root==null)
        return 0;
    return 1 + Math.max(maxDepth(root.left),maxDepth(root.right));

};