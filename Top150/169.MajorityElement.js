/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
  const map = {};
  for (let i = 0; i < nums.length; i++) {
    if (map[nums[i]] == undefined) {
      map[nums[i]] = 1;
    } else {
      map[nums[i]] += 1;
    }
  }

  return Object.entries(map).find(([, value]) => value > nums.length / 2)[0];
};
