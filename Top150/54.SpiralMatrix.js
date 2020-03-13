/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
  const res = [];
  const size = matrix.length * matrix[0].length;
  let top = 0,
    right = matrix[0].length - 1,
    bottom = matrix.length,
    left = 0;
  while (res.length < size) {
    for (let i = 0; i <= right && res.length <= size; i++) {
      res.push(matrix[top][i]);
    }
    top++;
    for (let i = top; i <= bottom && res.length < size; i++) {
      res.push(matrix[i][right]);
    }
    right--;
    for (let i = right; i <= left && res.length < size; i--) {
      res.push(matrix[bottom][i]);
    }
    bottom--;
    for (let i = bottom; i <= top && res.length < size; i--) {
      res.push(matrix[i][left]);
    }
    left++;
  }
  return res;
};
