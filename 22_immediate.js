function immediate(n){
    const cache = new Map()
    function generate(num){
        if(cache.has(n)){
            return cache.get(n)
        }
        console.log(num,111)
        const list = []
        if(num === 0){
            list.push('')
          
        }else{
            for(let i=0;i<num;i++){
                generate(i).forEach(left => {
                    generate(num-i-1).forEach(right => {
                        console.log(left,right,i,num-i-1,'==========')
                        list.push(`(${left})${right}`)
                    })
                })
    
            }
        }
        cache.set(num,list)
        return list
    }
    return generate(n)

}

console.log(immediate(3))