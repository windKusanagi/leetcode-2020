/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
  if (!nums || nums.length === 0) return [-1, -1];
  let left = 0,
    right = nums.length - 1,
    lIdx = -1,
    rIdx = -1;

  while (left <= right) {
    const middle = ((left + right) / 2) | 0;
    if (nums[middle] === target) lIdx = middle;
    if (nums[middle] >= target) {
      right = middle - 1;
    } else {
      left = middle + 1;
    }
  }

  left = 0;
  right = nums.length - 1;
  while (left <= right) {
    const middle = ((left + right) / 2) | 0;
    if (nums[middle] === target) rIdx = middle;
    if (nums[middle] <= target) {
      left = middle + 1;
    } else {
      right = middle - 1;
    }
  }

  return [lIdx, rIdx];
};

console.log(searchRange([5,7,7,8,8,10], 8));
console.log(searchRange([5,7,7,8,8,10], 6));