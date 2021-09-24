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
 * @return {boolean}
 */

// 2021/9/24 20:35 AC
// 94.52%(time)
// input : root ( TreeNote )
// 目的 : input 是一個 二元樹 , 求他是不是一個 對稱樹
/*
    O
            1
        2       2
    3               3 

    X
            1
        2       2
    3       3

    大概這樣
*/

// 解法 : 又用了一個 helper function , 但首先 如果 root 是 null return false
// 大概步驟 : 
// 1. 如果 左右 都是 null , return true
// 2. 如果其中一個不是 null , 一個卻是null , return false
// 3. 如果左右都有值 , 但是值不一樣 , return false
// 4. recursive 部分 , 對稱的傳進去 
// (下次看的時候 : 注意 recursive 怎麼傳的)

var isSymmetric = function(root) {
    if(root==null)
        return false;
    return helper(root.left,root.right);
};

function helper(left,right){

    if(left==null && right ==null)
        return true;
    if( (left != null && right == null) || (left == null && right !=null) )
        return false;
    
    if( (left != null && right != null) && (left.val != right.val ) )
        return false;
    
    return (helper(left.left,right.right) && helper(left.right,right.left));
}