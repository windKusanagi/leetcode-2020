/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function (n) {
  const res = [];
  for (let i = 0; i < n; i++) {
    const num = i + 1;
    if (num % 5 === 0 && num % 3 === 0 && num !== 0) {
      res.push("FizzBuzz");
    } else if (num % 5 === 0 && num !== 0) {
      res.push("Buzz");
    } else if (num % 3 === 0 && num !== 0) {
      res.push("Fizz");
    } else {
      res.push(num + "");
    }
  }
  return res;
};
