/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function (n) {
  if (!n) return 0;
  let res = 0;
  for (let i = 0; i < 32; i++) {
    res += n & 1;
    n >>= 1;
  }
  return res;
};
