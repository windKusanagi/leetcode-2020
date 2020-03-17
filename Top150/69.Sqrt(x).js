/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
  if(x < 2) return x;
  let l = 0, r = x;
  while (l < x) {
    const mid = (r+l) / 2 | 0;
    if (mid * mid === x) return mid;
    if (mid * mid > x) {
      r = mid - 1;
    } else {
      l = mid + 1;
    } 
  }
  return l - 1;
};