/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
  if (!nums1 || !nums2 || !nums1.length || !nums2.length) return [];
  const dict1 = {};
  const res = [];
  nums1.forEach((i) => {
    if (dict1[i]) {
      dict1[i]++;
    } else {
      dict1[i] = 1;
    }
  });

  nums2.forEach((i) => {
    if (dict1[i] > 0) {
      res.push(i);
      dict1[i]--;
    }
  });

  return res;
};
