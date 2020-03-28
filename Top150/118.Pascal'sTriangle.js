/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
  if (!numRows) return [];
  const res = [[1]];
  for (let i = 0; i < numRows - 1; i++) {
    const cur = [1];
    const last = res[res.length - 1];
    for (let j = 1; j < last.length; j++) {
      cur.push(last[j - 1] + last[j]);
    }
    cur.push(1);
    res.push(cur);
  }

  return res;
};
