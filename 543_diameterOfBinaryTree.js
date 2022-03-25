function diameterOfBinaryTree(root){
    if(!root)return 0
    let len = 0
    function depth(node){
        if(!node)return 0
        const left = depth(node.left)
        const right = depth(node.right)
       len = Math.max(len,left+right+1)
       return Math.max(left,right)+1
    }
    depth(root)
    return len


}