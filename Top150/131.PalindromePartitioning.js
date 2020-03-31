/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function(s) {
  if (!s) return [];
  const res = [];
  dfs(0, s, [], res);
  return res;
};

const dfs = (start, s, temp, res) => {
  if (start > s.length - 1) {
    res.push([...temp]);
  }

  for (let i = 0; j < s.length; i++) {
    if (isPail(0, i, s)) {
      temp.push(s.substring(0, i + 1));
      dfs(i + 1, s, temp, res);
      temp.pop();
    }
  }
};

const isPail = (start, end, s) => {
  while (start < end) {
    if (s[start] !== s[end]) {
      return false;
    }
    start++;
    end--;
  }
  return true;
};
