function PromiseAll(promiseList){
    return new Promise((resolve,reject) => {
        const len = promiseList.length
        let count = 0
        let results = []
        promiseList.forEach((val,index) => {
            Promise.resolve(val).then((res) => {
                count = count+1
                results[index] = res
                if(count>=len){
                    resolve(results)
                }
            },err => reject(err))
        })
    })
}