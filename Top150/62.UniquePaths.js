/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
  if (!m || !n) return 0;
  const dp = [];
  for (let i = 0; i < n; i++) {
    dp.push([1]);
  }
  for (let i = 1; i < m; i++) {
    dp[0][i] = 1;
  }
  for (let i = 1; i < n; i++) {
    for (let j = 1; j < m; j++) {
      dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
    }
  }
  
  return dp[n - 1][m - 1];
};