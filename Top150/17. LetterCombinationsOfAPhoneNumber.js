/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
  const letters = [
    ,
    ,
    "abc",
    "def",
    "ghi",
    "jkl",
    "mno",
    "pqrs",
    "tuv",
    "wxyz"
  ];
  const res = [];
  dfs(letters, 0, "", letters, res);
};

const dfs = (digits, len, cur, letters, res) => {
  if (len >= digits.length) {
    res.push(cur);
    return;
  }
  const str = letters[digits[len]];
  for (let i = 0; i < str.length; i++) {
    dfs(digits, len + 1, cur + str[i], letters, res);
  }
};
