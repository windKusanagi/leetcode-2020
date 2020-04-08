/**
 * @param {number} numerator
 * @param {number} denominator
 * @return {string}
 */
var fractionToDecimal = function(numerator, denominator) {
  if (numerator === 0) return "0";
  const flag = numerator * denominator > 0 ? "" : "-";
  const pNumerator = Math.abs(numerator);
  const pDenominator = Math.abs(denominator);

  const int = Math.floor(pNumerator / pDenominator);
  let rest = pNumerator % pDenominator;
  const map = {};
  let pos = 1;
  let dec = ".";
  while (rest != 0) {
    let curDec = Math.floor((rest * 10) / pDenominator);
    map[rest] = pos;
    rest = (rest * 10) % pDenominator;
    if (map[rest] !== undefined) {
      dec =
        dec.substring(0, map[rest]) +
        "(" +
        dec.substring(map[rest]) +
        curDec +
        ")";
      break;
    } else {
      dec += "" + curDec;
      pos++;
    }
  }

  return `${flag}${int}${dec === "." ? "" : dec}`;
};