/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function(dividend, divisor) {
  if (dividend === 0) return 0;
  if (divisor === -1 && dividend === -2147483648) return 2147483647;

  const sign =
    (dividend < 0 && divisor > 0) || (dividend > 0 && divisor < 0) ? -1 : 1;
  let pDividend = Math.abs(dividend);
  let pDividsor = Math.abs(divisor);

  if (pDividend < pDividsor) return 0;
  if (divisor === 1) return dividend;
  if (divisor === -1) return -dividend;

  let res = 0;

  for(let i=31; i>=0; i--){
      if(Math.abs(pDividend >> i) - pDividsor >=0){
          res += 1 << i;
          pDividend -= (pDividsor << i);
      }
  }

  return res * sign;
};

console.log(divide(-2147483648, 2));
console.log(divide(-1, 1));
console.log(divide(2147483647, 1));
console.log(divide(2147483647, 2));
console.log(divide(2147483647, 3));