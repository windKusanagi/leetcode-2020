/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      if (board[i][j] === word[0] && dfs(board, i, j, 0, word)) {
        return true;
      }
    }
  }
  return false;
};

const dfs = (board, i, j, count, word) => {
  if (count === word.length)
    return true;

  if (
    i < 0 ||
    i > board.length - 1 ||
    j < 0 ||
    j > board[0].length - 1 ||
    board[i][j] !== word[count]
  ) {
    return false;
  }

  const temp = board[i][j];
  board[i][j] = "";
  const res =
    dfs(board, i - 1, j, count + 1, word) ||
    dfs(board, i + 1, j, count + 1, word) ||
    dfs(board, i, j + 1, count + 1, word) ||
    dfs(board, i, j - 1, count + 1, word);
  board[i][j] = temp;

  return res;
};
