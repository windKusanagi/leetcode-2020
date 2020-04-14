/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
  if (!grid || !grid.length || !grid[0].length) return 0;

  let count = 0;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === "1") {
        count++;
        dfs(grid, i, j);
      }
    }
  }
  return count;
};

const dfs = (grid, i, j) => {
  if (
    i < 0 ||
    i > grid.length - 1 ||
    j < 0 ||
    j > grid[0].length - 1 ||
    grid[i][j] === "0"
  )
    return;

  grid[i][j] = "0";
  dfs(grid, i - 1, j);
  dfs(grid, i + 1, j);
  dfs(grid, i, j + 1);
  dfs(grid, i, j - 1);
};
