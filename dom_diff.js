const nodes = ['A', 'B', 'C', 'D'];

const after = ['B', 'A', 'E', 'D', 'C'];

const operations = [];



// 请自行定义VDomElement结构

function diff(nodes, after) {
    const len1 = nodes.length
    const len2 = after.length
    const index = 0
    while(index<=len1&&index<=len2){
        if(nodes[index] === after[index]){
            index++
            continue
        }
        break
    }
    if(index >=len1){
        for(let i = index;i<len2;i++){
            
        }
    }
    const map = {}




}
