const count = (map,currentKey) => {
    let num = 0
    for(let [key, value] of map){
        if(key<currentKey){
            num =  num+value
        }
    }

    return num
}

var countSmaller = function(nums) {
    const map = new Map()
    let len = nums.length
    const result = new Array(len)
    for(let i = len-1;i>=0;i--){
        const item = nums[i]
        if(map.get(String(item))){
            map.set(String(item),map.get(String(item))+1)
        }else{
            map.set(String(item),1)
        }
        result[i] = count(map,item)
    }
    return result
};
console.log(countSmaller([26,78,27,100,33,67,90,23,66,5,38,7,35,23,52,22,83,51,98,69,81,32,78,28,94,13,2,97,3,76,99,51,9,21,84,66,65,36,100,41]))
// console.log(countSmaller([-1,-1]))