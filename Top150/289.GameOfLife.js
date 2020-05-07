/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */

// Any live cell with fewer than two live neighbors dies, as if caused by under-population.
// Any live cell with two or three live neighbors lives on to the next generation.
// Any live cell with more than three live neighbors dies, as if by over-population..
// Any dead cell with exactly three live neighbors becomes a live cell, as if by reproduction.

// state 0： died to died
// state 1： live to live
// state 2： live to died
// state 3： died to live

var gameOfLife = function (board) {
  const m = board.length,
    n = board[0].length;
  const nx = [-1, -1, -1, 0, 0, 1, 1, 1];
  const ny = [-1, 0, 1, -1, 1, -1, 0, 1];
  let counter, cx, cy;

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      counter = 0;
      for (let k = 0; k < 8; k++) {
        cx = i + nx[k];
        cy = j + ny[k];
        if (
          cx >= 0 &&
          cx < m &&
          cy >= 0 &&
          cy < n &&
          (board[cx][cy] === 1 || board[cx][cy] === 2)
        ) {
          counter += 1;
        }
      }
      if (counter < 2 || counter > 3) {
        board[i][j] = board[i][j] ? 2 : 0;
      } else if (counter === 3) {
        board[i][j] = board[i][j] ? 1 : 3;
      }
    }
  }

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      board[i][j] = board[i][j] % 2;
    }
  }
};