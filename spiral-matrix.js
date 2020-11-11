//https://leetcode.com/problems/spiral-matrix/

/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    
    let return_array = []
    let direction = "R"
    
    let row = 0
    let col = 0
    
    while(return_array.length + 1 < matrix.length * matrix[0]?.length) {
        if(direction === 'R'){
            if(checkDirectionChange(matrix, direction, row, col)) {
                direction = 'D'
            } else {
                return_array.push(matrix[row][col])
                matrix[row][col] = true
                col++
            }
        } else if(direction === 'D'){
            if(checkDirectionChange(matrix, direction, row, col)) {
                direction = 'L'
            } else {
                return_array.push(matrix[row][col])
                matrix[row][col] = true
                row++
            }
        } else if(direction === 'L'){
            if(checkDirectionChange(matrix, direction, row, col)) {
                direction = 'U'
            } else {
                return_array.push(matrix[row][col])
                matrix[row][col] = true
                col--
            }
        } else if(direction === 'U'){
            if(checkDirectionChange(matrix, direction, row, col)) {
                direction = 'R'
            } else {
                return_array.push(matrix[row][col])
                matrix[row][col] = true
                row--
            }
        }        
    }
    
    if(matrix.length) {
      return_array.push(matrix[row][col])  
    } 
    return return_array
};

let checkDirectionChange = (matrix, direction, row, col) => {
    if(direction === 'R') {
        if(matrix[row].length === col + 1) {
            return true
        } else if(matrix[row][col + 1] === true) {
            return true
        } else {
            return false
        }
    } else if(direction === 'D') {
        if(matrix.length === row + 1) {
            return true
        } else if(matrix[row + 1][col] === true) {
            return true
        } else {
            return false
        }
    } else if(direction === 'L') {
        if(col - 1 < 0) {
            return true
        } else if(matrix[row][col - 1] === true) {
            return true
        } else {
            return false
        }
    } else if(direction === 'U') {
        if(row - 1 < 0) {
            return true
        } else if(matrix[row - 1][col] === true) {
            return true
        } else {
            return false
        }
    }
}