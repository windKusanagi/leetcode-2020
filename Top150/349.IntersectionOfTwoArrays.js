/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
  if (!nums1 || !nums2 || !nums1.length || !nums2.length) return [];
  const dict = {};
  nums1.forEach((i) => {
    if (!dict[i] && nums2.indexOf(i) !== -1) {
      dict[i] = i;
    }
  });
  return Object.values(dict);
};
