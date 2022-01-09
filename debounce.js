function debounce(fn,delay,immediate){
    let timer
    return function(...args){
        const context = this
        if(timer){
            clearTimeout(timer)
        }
        if(immediate){
            const callNow = !timer
            timer = setTimeout(() => {
                timer = null
            },delay)
            if(callNow)  fn.apply(context,args)

        }else{
            timer = setTimeout(() => {
                fn.apply(context,args)
            },delay)
        }
       
    }
}