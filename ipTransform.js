function transform(ip){
    const list = ip.split('.')
    const result = list.reduce((r,item,index) => {
        return r+parseInt(item<<((3-index)*8)) 
    },0)
    console.log(result)

}

function reverse(num){
    const list = []
    for(let i = 0;i<4;i++){
        list.unshift((num>>>(8*i))&255)
    }
   console.log(list)

}

// console.log(transform('10.0.3.193'))
console.log(reverse(167773121))
