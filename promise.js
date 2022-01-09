function MyPromise(fn){
    let state = 'pending'
    let value = null
    const callbacks = []

    this.then = function(onFulfilled,onReject){
        return new MyPromise((resolve,reject)=>{
            handle({
                onFulfilled,
                onReject,
                resolve,
                reject
            })
        })

    }

    this.catch = function(onError){
        this.then(null,onError)
    }

    this.finally = function(done){
        this.then(done,done)
    }

    function handle(callback){
        if(state === 'pending'){
            callbacks.push(callback)
            return 
        }
        console.log(callbacks,'====')
        const cb = state === 'fulfilled'?callback.onFulfilled:callback.onReject
        const next = state === 'rejected'?callback.resolve:callback.reject
        if(!cb){
            next(value)
            return 
        }
        const ret = cb(value)
        next(ret)
    }

    function resolve(newValue){
        if(state !== 'pending')return 
        if(newValue&&(typeof newValue === 'object'||typeof newValue === 'function')){
            const {then} = newValue
            if(typeof then === 'function'){
                then.call(newValue,resolve,reject)
                return 
            }
        }
        state = 'fulfilled'
        value = newValue
        handleCb()
    }
    function reject(newValue){
        if(state !== 'pending')return 
        if(newValue&&(typeof newValue === 'object'||typeof newValue === 'function')){
            const {then} = newValue
            if(typeof then === 'function'){
                then.call(newValue,resolve,reject)
                return 
            }
        }
        state = 'rejected'
        value = newValue
        handleCb()
    }

    function handleCb(){
        while(callbacks.length){
            const current = callbacks.shift()
            handle(current)
        }
    }
    fn(resolve,reject)
}


new MyPromise((resolve, reject) => {
    setTimeout(() => {
        resolve({ test: 1 })
    }, 1000)
}).then((data) => {
    console.log('result1', data)
    //dosomething
    return test()
}).then((data) => {
    console.log('result2', data)
})

function test(id) {
    return new MyPromise(((resolve, reject) => {
        setTimeout(() => {
            reject({ test: 2 })
        }, 5000)
    }))
}