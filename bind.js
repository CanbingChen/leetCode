function MyPromise(fn){
    let state = 'pending'
    let value = null
    const callbacks = []

    this.then = function(onFulfilled,onRejected){
        return new MyPromise((resolve,reject) => {
            handle({
                onFulfilled,
                onRejected,
                resolve,
                reject
            })
        })
    }

    function handle(callback){
        if(state === 'pending'){
            callbacks.push(callback)
            return 
        }
        const {  onFulfilled,
            onRejected,
            resolve,
            reject} = callback
        const cb = state === 'fulfilled'?onFulfilled:onRejected
        const next = status === 'rejected'?resolve:reject
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
            const { then } = newValue
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
            const { then } = newValue
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