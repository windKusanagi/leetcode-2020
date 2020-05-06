/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums) {
  if (nums.length === 1) return 0;
  let left = 0,
    right = nums.length - 1;
  while (left <= right) {
    const mid = (left + (right - left) / 2) | 0;
    if (nums[mid] < nums[mid + 1]) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return left;
};
