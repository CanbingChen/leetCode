var permute = function(nums) {

    const list = []
    function dfs(result,numList){
        if(numList.length<=1){
            list.push([...result,numList[0]])
            return 
        }
        numList.forEach((item,index) => {
            const newList = [...numList]
            newList.splice(index,1)
            dfs([...result,item],newList)
        })

    }
    dfs([],nums)
    return list
};

console.log(permute([1,2,3]))