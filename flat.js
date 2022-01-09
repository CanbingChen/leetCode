const list = [1, 2, 3, 4, [1, 2, 3, [1, 2, 3, [1, 2, 3]]], 5, "string", { name: "弹铁蛋同学" }];
function myFlat(nums){
    return nums.reduce((r,item)=> {
        if(typeof item === 'object'&&Array.isArray(item)){
            return r.concat(myFlat(item))
        }
        console.log(r,'rrr')
        return r.concat([item])
    },[])
    return result

}

console.log(myFlat(list))