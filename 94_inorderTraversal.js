var inorderTraversal = function (root) {
    if(!root)return []
    let result = []
    if (root.left) {
        result = [...inorderTraversal(root.left)]
    }
    result.push(root.val)
    if (root.right) {
        result = result.concat([...inorderTraversal(root.right)])
    }
    return result
};