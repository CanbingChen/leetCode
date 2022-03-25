var invertTree = function(root) {
    if(!root)return root
    const left = root.left
   root.left = invertTree(root.right)
    root.right = invertTree(left)
    return root
};