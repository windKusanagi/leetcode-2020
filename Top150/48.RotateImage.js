/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
  const len = matrix.length;

  for (let i = 0; i < len; i++) {
    for (let j = i; j < len; j++) {
      [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
    }
  }

  for(let i = 0; i < len; i ++) {
    matrix[i].reverse();
  }

  return matrix;
};


console.log(rotate(
[
  [1,2,3],
  [4,5,6],
  [7,8,9]
]
));