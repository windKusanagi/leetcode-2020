// /**
//  * @param {string} s
//  * @return {number}
//  */
var titleToNumber = function(s) {
  let res = 0;
  if (!s) return res;
  for (let i = s.length - 1; i >= 0; i--) {
    res +=
      (s[i].charCodeAt(0) - "A".charCodeAt(0) + 1) *
      Math.pow(26, s.length - i - 1);
  }
  return res;
};
