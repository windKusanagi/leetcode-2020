/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
  if (!matrix || matrix.length === 0 || matrix[0].length === 0) return;
  let zeroCol = false,
    zeroRow = false;
  for (let i = 0; i < matrix[0].length; i++) {
    if (matrix[0][i] === 0) zeroRow = true;
  }
  for (let i = 0; i < matrix.length; i++) {
    if (matrix[i][0] === 0) zeroCol = true;
  }
  for (let i = 1; i < matrix.length; i++) {
    for (let j = 1; j < matrix[0].length; j++) {
      if (matrix[i][j] === 0) {
        matrix[i][0] = 0;
        matrix[0][j] = 0;
      }
    }
  }
  for (let i = 1; i < matrix.length; i++) {
    for (let j = 1; j < matrix[0].length; j++) {
      if (matrix[0][j] === 0 || matrix[i][0] === 0) matrix[i][j] = 0;
    }
  }

  if (zeroCol) {
    for (let i = 0; i < matrix.length; i++) {
      matrix[i][0] = 0;
    }
  }

  if (zeroRow) {
    for (let i = 0; i < matrix[0].length; i++) {
      matrix[0][i] = 0;
    }
  }
};
