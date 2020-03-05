/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  if (s.length % 2 !== 0) return false;
  const sta = [];
  const dict = {
    "(": ")",
    "{": "}",
    "[": "]"
  };
  for (let i = 0; i < s.length; i++) {
    if (!sta.length || s[i] !== dict[sta[sta.length - 1]]) {
      sta.push(s[i]);
    } else {
      sta.pop();
    }
  }

  return !sta.length;
};
