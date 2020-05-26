/**
 * @param {number[]} nums
 */
var Solution = function (nums) {
  this.original = [...nums];
};

/**
 * Resets the array to its original configuration and return it.
 * @return {number[]}
 */
Solution.prototype.reset = function () {
  return this.original;
};

/**
 * Returns a random shuffling of the array.
 * @return {number[]}
 */
Solution.prototype.shuffle = function () {
  const temp = [...this.original];
  for (let i = 0; i < temp.length; i++) {
    const idx = Math.floor(Math.random() * (i + 1));
    [temp[i], temp[idx]] = [temp[idx], temp[i]];
  }

  return temp;
};
