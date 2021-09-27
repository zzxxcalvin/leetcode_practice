/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */

// 2021/9/27 14:13 AC
// 61.85%(time)
// input : nums(asc sorted number array)
// 目的 : input 是一個 遞增排序好的 int array (值從左到右越來越大)
// 將它轉換成一個 平衡二元搜尋樹 
// 平衡二元搜尋樹 : 
// 1. 所有左子樹都比它的根小 , 所有右子樹都比它的根大
// 2. 任意兩左右子樹的深度差異不超過 1

// 這題我完全沒碰過 , 所以想了一陣子
// 不過後來看了人家的想法後比較清楚
// 要運用 平衡二元搜尋樹 的特性 
// 因為跟左右子樹的大小關係 , 所以 root 一定是中位數 => 這是一個排序好的陣列
// 每次都取 中位數 出來做成 new TreeNode 
// 然後 recursive 左側 (用 array.slice(0,mid) ) slice 不包含 end
// 再 recursive 右側 (array.slice(mid+1,array.length) ) slice 有包含開頭 ,所以要 +1 
// 最後 return root;



var sortedArrayToBST = function(nums) {
    if(nums.length==0)
        return null;
    let mid = Math.floor(nums.length/2);
    let root = new TreeNode(nums[mid]);
    root.left = sortedArrayToBST(nums.slice(0,mid));
    root.right = sortedArrayToBST(nums.slice(mid+1,nums.length));
    
    return root;
};