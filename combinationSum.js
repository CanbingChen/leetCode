var combinationSum = function(candidates, target) {

    const list = new Set()
    function search(candidates,result,target){
        return candidates.map(item => {
            if(item === target){
                list.add(JSON.stringify([...result,item].sort()))

                return 
            }
            if(item >target)return false
            search(candidates,[...result,item],target-item)
        })
    }
    search(candidates,[],target)
    return [...list].map(item=>JSON.parse(item))
};

console.log(combinationSum([2,3,6,7],7))