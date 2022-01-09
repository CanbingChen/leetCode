var spiralOrder = function(matrix) {
    const rowLen = matrix.length;
    const cLen = matrix[0].length
    const order = []
    let left = 0,right = cLen-1,top = 0,bottom = rowLen-1
    while(left<=right&&top<=bottom){
        for(let i=left;i<=right;i++){
            order.push(matrix[top][i])
        }
       
        for(let i = top+1;i<=bottom;i++){
            order.push(matrix[i][right])
        }
     
        if (left < right && top < bottom) {
            for(let i = right-1;i>left;i--){
                order.push(matrix[bottom][i])
            }
           
            for(let i = bottom;i>top;i--){
                order.push(matrix[i][left])
            }
           
        }
        right--
        top++
        bottom--
        left++
     
       
    }

    return order
};

console.log(spiralOrder([[1,2,3,4],[5,6,7,8],[9,10,11,12]]))