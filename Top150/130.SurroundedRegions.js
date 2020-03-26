/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function(board) {
  if (!board || board.length <= 1 || board[0].length <= 1) return;
  const m = board.length - 1;
  const n = board[0].length - 1;
  for (let i = 0; i <= m; i++) {
    if (board[i][0] === "O") {
      mark(i, 0, board, m, n);
    }
  }
  for (let i = 0; i <= n; i++) {
    if (board[0][i] === "O") {
      mark(0, i, board, m, n);
    }
  }
  for (let i = 0; i <= m; i++) {
    if (board[i][n] === "O") {
      mark(i, n, board, m, n);
    }
  }
  for (let i = 0; i <= n; i++) {
    if (board[m][i] === "O") {
      mark(m, i, board, m, n);
    }
  }
  for (let i = 0; i <= m; i++) {
    for (let j = 0; j <= n; j++) {
      if (board[i][j] === "O") board[i][j] = "X";
    }
  }

  for (let i = 0; i <= m; i++) {
    for (let j = 0; j <= n; j++) {
      if (!board[i][j]) board[i][j] = "O";
    }
  }
};

const mark = (i, j, board, m, n) => {
  board[i][j] = "";
  if (i > 0 && board[i - 1][j] === "O") {
    mark(i - 1, j, board, m, n);
  }
  if (i < m && board[i + 1][j] === "O") {
    mark(i + 1, j, board, m, n);
  }
  if (j > 0 && board[i][j - 1] === "O") {
    mark(i, j - 1, board, m, n);
  }
  if (j < n && board[i][j + 1] === "O") {
    mark(i, j + 1, board, m, n);
  }
};