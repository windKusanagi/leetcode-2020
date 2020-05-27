/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
  const dict = {};
  for (let i = 0; i < s.length; i++) {
    if (dict[s[i]]) {
      dict[s[i]] += 1;
    } else {
      dict[s[i]] = 1;
    }
  }

  for (let i = 0; i < s.length; i++) {
    if (dict[s[i]] === 1) {
      return i;
    }
  }

  return -1;
};
