/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var longestSubstring = function (s, k) {
  if (!s || s.length < k) return 0;
  const dict = new Array(26).fill(0);
  for (let i = 0; i < s.length; i++) {
    dict[s.charCodeAt(i) - "a".charCodeAt(0)]++;
  }
  let fullString = true;
  for (let i = 0; i < s.length; i++) {
    if (dict[s.charCodeAt(i) - "a".charCodeAt(0)] < k) {
      fullString = false;
    }
  }

  if (fullString) return s.length;

  let start = 0,
    end = 0,
    result = 0;
  while (end < s.length) {
    if (dict[s.charCodeAt(end) - "a".charCodeAt(0)] < k) {
      result = Math.max(result, longestSubstring(s.substring(start, end), k));
      start = end + 1;
    }
    end++;
  }
  result = Math.max(result, longestSubstring(s.substring(start), k));

  return result;
};
