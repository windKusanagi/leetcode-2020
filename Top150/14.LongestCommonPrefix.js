/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if (strs.length === 0) return '';
    if (strs.length === 1) return strs[0];
    let i = 0;
    while (strs.every(el => el[i] && el[i] === strs[0][i])) {
        i ++;
    }
    return strs[0].substring(0, i + 1);
};



// console.log( longestCommonPrefix(["flower","flow","flight"])  //  -> 'fl
// console.log( longestCommonPrefix(["dog","racecar","car"])  //  -> ''