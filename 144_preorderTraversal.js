function preorderTraversal(root){
    if(!root)return []
    const result = []
    result.push(root.val)
    result = [...result,...preorderTraversal(root.left),...preorderTraversal(root.right)]
    return result

}