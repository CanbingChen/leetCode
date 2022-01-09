var trap = function(height) {
    let left = 0;
    const len = height.length
    let right = len-1;
    let lMax = height[left],rMax = height[right];
    const max = Array.from(new Array(len)).map(item => ({}))
 
    for(let i = 0;i<len;i++){
        lMax = Math.max(lMax,height[left])
         rMax = Math.max(rMax,height[right])
        max[left].lMax = lMax
        max[right].rMax = rMax
        left++
        right--
    }

    console.log(max)
    return max.reduce((result,item,index) => {
        const maxHeight = Math.min(item.lMax,item.rMax)
        console.log(maxHeight,height[index])
        return result+(Math.max(maxHeight-height[index],0))
    },0)
};

console.log(trap([0,1,0,2,1,0,1,3,2,1,2,1]))