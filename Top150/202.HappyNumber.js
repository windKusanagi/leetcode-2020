/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
  if (!n) return false;
  const dict = {};
  while (1) {
    let sum = (n + "").split("").reduce((acc, cur) => acc + +cur * +cur, 0);
    if (sum === 1) {
      return true;
    } else if (dict[sum]) {
      return false;
    } else {
      dict[sum] = true;
      n = sum;
    }
  }
};
