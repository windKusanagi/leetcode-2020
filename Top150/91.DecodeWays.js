/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function(s) {
  if (s[0] === "0") return 0;
  const dp = [1];

  for (let i = 1; i < s.length; i++) {
    if (
      s[i] === "0" &&
      (+`${s[i - 1]}${s[i]}` < 10 || +`${s[i - 1]}${s[i]}` > 26)
    ) {
      dp[i] = 0;
    } else if (
      s[i] !== "0" &&
      +`${s[i - 1]}${s[i]}` >= 10 &&
      +`${s[i - 1]}${s[i]}` <= 26
    ) {
      dp[i] = i === 1 ? 2 : dp[i - 1] + dp[i - 2];
    } else if (s[i] !== "0") {
      dp[i] = dp[i - 1];
    } else {
      dp[i] = i === 1 ? 1 : dp[i - 2];
    }
  }

  return dp[s.length - 1];
};

console.log(numDecodings('226'));
console.log(numDecodings('102213'));