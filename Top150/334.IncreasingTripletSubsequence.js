/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function (nums) {
  if (!nums || nums.length <= 2) return false;
  let m = Infinity,
    n = Infinity;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] <= m) {
      m = nums[i];
    } else if (nums[i] > n) {
      return true;
    } else {
      n = nums[i];
    }
  }

  return false;
};
