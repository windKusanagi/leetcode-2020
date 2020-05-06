/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function (nums) {
  let left = 1,
    right = nums.length,
    mid = -1,
    count = 0;
  while (left <= right) {
    mid = (left + (right - left) / 2) | 0;
    count = 0;
    nums.forEach((num) => {
      if (num <= mid) count++;
    });
    if (count <= mid) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return left;
};
