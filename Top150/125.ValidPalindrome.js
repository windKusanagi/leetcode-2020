/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
  if (s === "") return true;
  if (!s) return false;
  const newS = s.toLowerCase();
  let left = 0,
    right = newS.length - 1;
  let res = true;
  while (left < right) {
    while (left < right && !isAlphanumeric(newS[left])) {
      left++;
    };

    while (left < right && !isAlphanumeric(newS[right])) { 
      right--
    };
    if (newS[left] !== newS[right]) {
      res = false;
      break;
    }
    left++;
    right--;
  }

  return res;
};

const isAlphanumeric = c => (c >= "0" && c <= "9") || (c >= "a" && c <= "z");
