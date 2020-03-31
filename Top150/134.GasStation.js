/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function(gas, cost) {
  const len = gas.length;
  for (let i = 0; i < len; i++) {
    let cur = 0;
    let j = 0;
    let counter = 0;
    let flag = true;
    while (j < len && flag) {
      cur += gas[(i + j) % len] - cost[(i + j) % len];
      if (cur >= 0) {
        counter++;
      } else {
        flag = false;
      }
      j++;
    }
    if (counter === len) return i;
  }
  return -1;
};
