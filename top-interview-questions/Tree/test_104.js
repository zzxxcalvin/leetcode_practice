
function TreeNode(val, left, right){
    this.val = (val===undefined ? 0 : val)
    this.right = (right===undefined ? null : right)
    this.left = (left===undefined ? null : left);
}


let node = new TreeNode(1,null,null);
let node2 = new TreeNode(2,null,null);
let node3 = new TreeNode(3,node,node2);

// console.log(TreeNode(1,2,3));
console.log(node3);

var maxDepth = function(root) {
    if(root==null)
        return 0;
    return 1 + Math.max(maxDepth(root.left),maxDepth(root.right));

};

console.log(maxDepth(node3));