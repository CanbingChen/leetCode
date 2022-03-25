var maximumSwap = function(num) {
    
    let list = `${num}`.split('')
    const len = list.length
    const maxList = (new Array()).fill(0)
    maxList[len-1] = {
        mIndex:len-1,
        mValue:list[len-1]
    }
    for(let i = len-2;i>=0;i--){
      let {mValue,mIndex} = maxList[i+1]
      let item = list[i]

      if(item>mValue){
        mValue = item
        mIndex = i
      }
      maxList[i] =  {mValue,mIndex}
    }
    console.log(maxList)
    for(let i = 0;i<len;i++){
    const {mIndex,mValue} = maxList[i]
      if(mIndex>i&&mValue>list[i]){
          list[mIndex] = list[i]
          list[i] = mValue
          break
      }
    }
    return Number(list.join(''))
};

console.log(maximumSwap(98368))