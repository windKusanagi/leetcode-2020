/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function (n) {
  if (n <= 2) return 0;

  const arr = new Array(n).fill(true);
  arr[0] = false;
  arr[1] = false;
  for (let i = 2; i <= n ** 0.5; i++) {
    for (let j = i * i; j <= n; j += i) {
      arr[j] = false;
    }
  }

  count = arr.reduce((acc, cur) => acc + cur, 0);

  return count;
};
