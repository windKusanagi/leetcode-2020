/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
  const carry = (digits[digits.length] + 1) / 10 | 0;
  digits[digits.length - 1] ++;
  digits[digits.length - 1] = digits[digits.length - 1] % 10;
  let i = digits.length - 2;
  while(carry) {
    const sum = digits[i] + carry;
    const carry = sum / 10 | 0;
    digits[i] = sum % 10;
    i --;
  }
  return digits;
};