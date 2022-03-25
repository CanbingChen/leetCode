var hasPathSum = function(root, targetSum) {
    if(!root)return false
    if(!root.left&&!root.right){
        if(root.val === targetSum){
            return true
        }
        return false
    }
    return hasPathSum(root.left,targetSum-root.val)||hasPathSum(root.right,targetSum-root.val)

};