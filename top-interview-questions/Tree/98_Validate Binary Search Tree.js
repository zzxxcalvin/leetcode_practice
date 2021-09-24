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

// 2021/9/24 18:06
// 71.97%(time)
// input root(TreeNode)
// 目的 : 求 root 是不是一個 valid Binary Search Tree 

/*
    二元樹(Binary Tree) VS 二元搜尋樹(Binary Search Tree)
    
    二元樹 : 每個 root 可以有 0,1,2 個子節點 (不用一定要有) , 數字大小不用排序

    二元搜尋樹 : 每個 root 可以有 0,1,2 個子節點 (不用一定要有) , 數字大小必須遵守以下規則:
        1. 在 root 左側往下的所有 node 都必須小於 root 
        2. 在 root 右側往下的所有 node 都必須大於 root 

*/ 

// 解題方式 : 多使用一個 helper function
// 走到底 return true , 一如往常

// 不知道以後看不看得懂的自己的思路 : 
// isValid(root,min,max) , 目標是可以記錄當前應該要最大(max) 應該要最小(min) 跟自己現在的值
// val => root.val(當前的自己)

// 當往左走時 , 自己應該要是最大的 
// 在 recusive 向左的時候 isValid(root.left,min,max) 的 max 會放當前的自己 => isValid(root.left,min,val)

// 當往右走時 , 自己應該要是最小的 
// 在 recusive 向左的時候 isValid(root.left,min,max) 的 max 會放當前的自己 => isValid(root.left,val,max)

// 在轉彎的過程 (向左再向右 or 向右再向左)
// 必須要能確保前前一 level 的值是最大/最小
// 假設前一層是向右往下
// 當這一層(向左往下) isValid(root.left,val,max) 的時候 , 的 max 代表的是上一層的 val 

// 下次看的時候就 多看幾遍想一下 , 或找個圖來想像
// 加油 

var isValidBST = function(root) {
    return isValid(root,null,null);
};

function isValid(root,min,max){
    
    if(root==null)
        return true;
    let val = root.val;
    if((min != null && val <= min) || (max != null && val >= max ) ){
        return false;
    }

    return (isValid(root.left,min,val) && isValid(root.right,val,max));
}