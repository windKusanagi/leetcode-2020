/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
  if (!s || !wordDict) return false;
  const dp = new Array(s.length + 1).fill(false);
  dp[0] = true;
  for (let i = 0; i <= dp.length && !dp[dp.length-1]; i++) {
    if (dp[i]) {
      wordDict.forEach(word => {
        if (s.substring(i, i + word.length) === word) {
          dp[i + word.length] = true;
        }
      });
    }
  }
  return !!dp[s.length];
};

console.log(wordBreak("leetcode", ["leet", "code"]));
console.log(wordBreak("applepenapple", ["apple", "pen"]));
console.log(wordBreak("catsandog", ["cats", "dog", "sand", "and", "cat"]));
console.log(wordBreak("aaaaaaa", ["aaaa", "aaa"]));
console.log(wordBreak("a", ["a"]));
