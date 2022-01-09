function fn(arr){
    const result = []
    const len = arr.length
    function dfs(str,height){
        if(height === len){
            result.push(str)
            return 
        }
        const current = arr[height]
        current.forEach(item => {
            dfs(str+item,height+1)
        })

    }
    dfs('',0)
    return result

}
const list = [['a','b'],['m','n'],['1','2']]
console.log(fn(list))
