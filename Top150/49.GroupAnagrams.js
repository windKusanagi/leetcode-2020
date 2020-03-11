/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    if (!strs || !strs.length ) return [];
    const dict = {};
    const sortedStrs = strs.map(el => el.split('').sort((a,b) => a - b ));
    for (let i = 0; i < sortedStrs; i ++) {
      if (dict[sortedStrs[i]]) {
        dict[sortedStrs[i]].push(strs[i]);
      } else {
        dict[sortedStrs[i]] = [strs[i]];
      }
    }

    return Object.values(dict);
};