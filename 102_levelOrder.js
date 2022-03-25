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
 var levelOrder = function(root) {
    if(!root)return []
    const result = []
    const nodeQenue = [root]
    while(nodeQenue.length){
        const len = nodeQenue.length
        const list = []
        for(let i = 0;i<len;i++){
             const node = nodeQenue.shift()
             if(node.left){
                 nodeQenue.push(node.left)
             }
             if(node.right){
                 nodeQenue.push(node.right)
             }
            list.push(node.val)
        }
        result.push(list)
    }
    return result
};