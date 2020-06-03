/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function (gas, cost) {
  for (let i = 0; i < gas.length; i++) {
    let acc = 0;
    for (let j = 0; j < gas.length; j++) {
      let cur = (i + j) % gas.length;
      acc += gas[cur] - cost[cur];
      if (acc < 0) break;
      if (j === gas.length - 1) {
        return i;
      }
    }
  }

  return -1;
};
