function generateMatrix(num){
    const list = new Array(num).fill(0)
    const matrix = list.map(() => {
       return new Array(num).fill(0)
    })
    let top = 0,bottom = num -1;
    let left = 0,right = num -1;
    let value = 1;
    while(top<=bottom&&left<=right&&value<=(num*num)){
        console.log(left,right,top,bottom)
        for(let i =left;i<=right;i++){
            matrix[top][i] = value++
        }
        top++
        for(let i =top;i<=bottom;i++){
            matrix[i][right] = value++
        }
        right--

        for(let i =right;i>=left;i--){
            matrix[bottom][i] = value++
        }
        bottom--

        for(let i =bottom;i>=top;i--){
            matrix[i][left] = value++
        }
        left++
    

    }
   return matrix

}


console.log(generateMatrix(4))