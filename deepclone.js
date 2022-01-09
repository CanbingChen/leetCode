function deepClone(object,map = new WeekMap()){
    if(object instanceof Date ){
        return new Date(object)
    }
    if(object instanceof RegExp){
        return new RegExp(object)
    }

    if(typeof object !== 'object'){
        return object
    }
    const clone = Array.isArray(object)?[]:{}
    if(map,get(object))return map.get(object)
    map.set(target,clone)
    Reflect.ownKeys(object).forEach(key => {
        clone[key] = deepClone(object[key],map)
    })
    return clone
}

