var minPathSum = function(grid) {
    const rLen = grid.length
    if(rLen<=0)return 0
    const cLen = grid[0].length
    const list = new Array(rLen).fill(0).map(_ => new Array(cLen).fill(0))
    list[0][0] = grid[0][0]
    for(let i = 0;i<rLen;i++){
        for(let j = 0;j<cLen;j++){
            console.log('==========')
            if(i===j&&i===0){
                continue
            }
            if(i === 0){
                list[i][j] = list[i][j-1]+grid[i][j]
            }
            if(j === 0){
                list[i][j] = list[i-1][j]+grid[i][j]
            }
            if(i>0&&j>0){
                list[i][j] = Math.min(list[i-1][j],list[i][j-1])+grid[i][j]
            }
        }   
    }
    console.log(list,'==========')
    return list[rLen-1][cLen-1]

};


console.log(minPathSum([[1,3,1],[1,5,1],[4,2,1]]))