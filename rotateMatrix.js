/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
 var rotate = function(matrix) {
    const rLen = matrix.length
    const cLen = matrix[0].length
    const counts = Math.floor(rLen/2)
    for(let i = 0;i<counts;i++){
       
        let startValue = [...matrix[0]]
        let left = i,top = i,right = rLen-1 -i,bottom = cLen-i-1;
       
        for(let rowIndex = top;rowIndex<bottom;rowIndex++){
            matrix[rowIndex][left] = matrix[rowIndex+1][left]
        }

        // for(let colIndex = left;colIndex<right;colIndex++){
        //     matrix[bottom][colIndex] = matrix[bottom][colIndex+1]
        // }
        console.log(matrix,'iiiiii')


        // for(let rowIndex = bottom;rowIndex>top;rowIndex--){
        //     matrix[rowIndex][right] = matrix[rowIndex-1][right]
        // }
        // for(let colIndex = right;colIndex>left;colIndex--){
        //     matrix[top][colIndex] = matrix[top][colIndex-1]
        // }
        // matrix[left][right] = entValue

    }

};
const matrix = [[1,2,3],[4,5,6],[7,8,9]]
rotate(matrix)
console.log(matrix)