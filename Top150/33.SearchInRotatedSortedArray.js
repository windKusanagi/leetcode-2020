/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
  if (!nums || nums.length === 0 ) return -1;
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    const middle = (left + right) / 2 | 0;
    if (nums[middle] === target ) return middle;
    if (nums[middle] > nums[right]) {
      left = middle + 1;
    } else {
      right = middle;
    }
  }

  const pivot = left;  
  let start = 0, end = nums.length -1;

  if (target >= nums[pivot] && target <= nums[nums.length - 1]) {
    start = pivot;
  } else {
    end = pivot;
  }

  while(start <= end) {
    const middle = (start + end) / 2 | 0;
    if (nums[middle] === target ) return middle;

    if (target > nums[middle]) {
      start = middle + 1;
    } else {
      end = middle - 1;
    }
  }
  return -1;
};


console.log(search([4,5,6,7,0,2,3], 2));
console.log(search([4,5,6,7,0,1,2], 3));
console.log(search([4,5,6,7,0,1,2], 0));
console.log(search([1], 1));
