function curry(fn,args){
    const context = this
    const len = fn.length
    args = args||[]
    return function(){
        const argList = Array.prototype.slice.call(arguments)
        args = args.concat(argList)
        if(args.length<len){
            return curry.call(context,fn,args)
        }
        return fn.apply(context,args)
    }

}

var fn = curry(function(a, b, c) {
    console.log([a, b, c]);
});

// fn("a", "b", "c") // ["a", "b", "c"]
// fn("a", "b")("c") // ["a", "b", "c"]
// fn("a")("b")("c") // ["a", "b", "c"]
// fn("a")("b", "c") // ["a", "b", "c"]