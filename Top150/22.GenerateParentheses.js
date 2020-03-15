/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
  if (n === 0) return [];
  const res = [];
  backtracing("", 0, 0, n, res);
  return res;
};

const backtracing = (cur, open, close, pair, res) => {
  if (cur.length === pair * 2) {
    res.push(cur);
    return;
  }
  if (open < pair) backtracing(cur + "(", open + 1, close, pair, res);
  if (open > close) backtracing(cur + ")", open, close + 1, pair, res);
};

console.log(generateParenthesis(3));