/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
  if (intervals.length <= 1) return intervals;
  intervals.sort((x, y) => x[0] - y[0]);
  const res = [intervals[0]];
  let current = intervals[0];
  for (let i = 1; i < intervals.length; i++) {
    if (intervals[i][0] <= current[1]) {
      if (intervals[i][1] > current[1]) {
        res.pop();
        current[1] = intervals[i][1];
        res.push([...current]);
      }
    } else {
      current = intervals[i];
      res.push([...current]);
    }
  }

  return res;
};

console.log(merge([[1,4],[4,5]]));
console.log(merge([[1,3],[2,6],[8,10],[15,18]]));
console.log(merge([[2,3],[0,1],[1,2],[3,4],[4,5],[1,1],[0,1],[4,6],[5,7],[1,1],[3,5]]));