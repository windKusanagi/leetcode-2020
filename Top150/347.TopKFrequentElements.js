/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  if(!nums || !nums.length || !k) return [];
  const map = {};
  for (let i = 0; i < nums.length; i++) {
    if (map[nums[i]]) {
      map[nums[i]] += 1;
    } else {
      map[nums[i]] = 1;
    }
  }
  return Object.entries(map)
    .sort((a, b) => b[1] - a[1])
    .map((e) => +e[0])
    .slice(0, k);
};
