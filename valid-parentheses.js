//https://leetcode.com/problems/valid-parentheses/
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let x = s.split('')
    let arr = []
    for(i in x) {
        if(x[i] === '(' ||x[i] === '{' || x[i] === '['){
            arr.push(x[i])
        } else if(x[i] === ')' ||x[i] === '}' || x[i] === ']') {
            let temp = arr.pop()
            if(!temp) {
                return false
            }
            if(temp === '(' && x[i] !== ')' ) {
                return false
            }
            if(temp === '[' && x[i] !== ']' ) {
                return false
            }
            if(temp === '{' && x[i] !== '}' ) {
                return false
            }
        }
    }
    if (arr.length > 0) {
        return false
    }
    return true
    
};