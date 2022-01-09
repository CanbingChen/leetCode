function throttle(fn,delay){
    let pre = 0
    let timer
    return function(...args){
        const context = this
        const now = Date.now()
        const restTime = wait - (now - pre)
        if(restTime<=0){
            if(timer){
                clearTimeout(timer)
                timer = null
            }
            fn.apply(context,args)
            pre = now
        }else if(!timer){
            timer = setTimeout(() => {
                timer = null
                pre = Date.now()
                fn.apply(context,args)
            },restTime)
        }
    }

}