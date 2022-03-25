var kthLargest = function(root, k) {
    const list = []
    function dfs(current){
        if(current === null)return ;
       dfs(current.right)
       list.push(current.val)
       dfs(current.left)
        
    }
    dfs(root)
    const len = list.length
    return list[k-1]
};