var sumNumbers = function(root) {
    if(!root)return 0
    const list = []
    const p = []
    function dfs(node,path){
        if(!node)return
        path.push(node.val)
        if(!node.left&&!node.right){
            const num = Number(path.join(''))
            list.push(num)
        }
        dfs(node.left,path)
        dfs(node.right,path)
        path.pop()
    }
    dfs(root,p)
    console.log(list)
    return list.reduce((r,item) => r+item,0)
};