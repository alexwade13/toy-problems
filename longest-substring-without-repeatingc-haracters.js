//https://leetcode.com/problems/longest-substring-without-repeating-characters/
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let used = {}
    let length = 0
    let maxLength = 0
    let char;
    for(let i = 0; i < s.length; i++ ) {
        used = {}
        length = 0
        for(let j = i; j < s.length; j++) {
            char = s.charAt(j)
            if(used[char]) {
                break
            } else {
                length++
                used[char] = true
                
            }
            
        }
        if(length > maxLength) {
            maxLength = length
        }
        if((s.length - i) < maxLength) {
            break;
        }
        
    }
    return maxLength
};