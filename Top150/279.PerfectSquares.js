/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function (n) {
  if (!n) return 0;
  const dp = new Array(n + 1).fill(Infinity);
  dp[0] = 0;

  for (let i = 0; i <= n; i++) {
    for (let j = 1; j * j <= n; j++) {
      dp[i + j * j] = Math.min(dp[i + j * j], dp[i] + 1);
    }
  }

  return dp[n];
};
