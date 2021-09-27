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
 * @return {number[][]}
 */

// 2021/9/27 AC(*)
// 47.98%(time)

// input : root (TreeNode)
// 目標 : 遍歷 Binary Tree , return 一個按照 level 排列的 array , 每個 level 自己成一個 array
// 會 return 成 二階陣列的形式 , array[x] , x+1 代表的就是第幾 level (因為 index 從 0 開始)
// ex : [1,2,3] => [[1],[2,3]]

// 同一個 "level" 都要在同一個陣列裡 , 所以 level 1 最多有 1個 , level 2 最多有 2 個 , level 3 最多有 4 個
// 用一個 helper function , 初始傳入 root 跟 level 數字 1
// root === null => return ;
// root 有值的話 , 比對 array 長度跟 level , array長度 < level 代表這個 level 還沒有開始放 , 新增一個 []
// 將 root.val 放入 array[level-1] 的陣列中 (因為 index 是 level -1)
// recursive 執行 left 跟 right 
// return array ; 
// 這題對我的小腦袋來說有點複雜 , 多看幾遍應該就想得懂了 

// leetcode 107 的 target output 是這題的 array.reverse()
// 當然這題寫完直接 reverse() 也行 , 不過可能可以想想如果答案反過來會不會可以換別的作法
// 想想好像 102 的寫法比較好懂也好寫 , 可能碰到這類型題目就是做完後再 reverse() 反而是最簡單的


var levelOrder = function(root) {
    if(!root)
        return [];
    let array = [];
    search(root,1);

    function search(node,level){
        if(node){
            if(array.length < level){
                array.push([]);
            }

            let arr = array[level-1];
            arr.push(node.val);
            search(node.left,level+1);
            search(node.right,level+1);
        }else{
            return ;
        }
        
    }

    return array;
};

