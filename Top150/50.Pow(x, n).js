/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
  if (n === 0) return 1;
  return n > 0 ? pow(x, n) : 1 / pow(x, n);
};

const pow = (x, n) => {
  if (n === 0) return 1;
  const temp = pow(x, (n / 2) | 0);
  if (n % 2 === 0) {
    return temp * temp;
  } else {
    return temp * temp * x;
  }
};
