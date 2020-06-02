/**
 * @param {string} secret
 * @param {string} guess
 * @return {string}
 */
var getHint = function (secret, guess) {
  const dict = new Array(10).fill(0);
  let bulls = 0,
    cows = 0;
  for (let i = 0; i < secret.length; i++) {
    if (secret[i] === guess[i]) {
      bulls++;
    } else {
      dict[+secret[i]]++;
    }
  }

  for (let i = 0; i < secret.length; i++) {
    if (secret[i] !== guess[i] && dict[+guess[i]]) {
      cows++;
      dict[+guess[i]]--;
    }
  }
  return `${bulls}A${cows}B`;
};
