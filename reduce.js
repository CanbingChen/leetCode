function reduce(list,fn,result){
    let len = list.length;

    for(let i = 0;i<len;i++){
        const item = list[i]
        result = fn(result,item,i,list)
    }
    return result
}