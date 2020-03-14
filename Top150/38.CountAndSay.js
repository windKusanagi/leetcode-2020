/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
  let s = '1';
  for(let i = 0; i < n - 1; i ++) {
      let ns = '';
      let j = 0;
      while(j<s.length) {
          let counter = 1;
          while(j<s.length - 1 && s[j] === s[j+1]) {
              counter++;
              j++;
          }
          ns += counter + '' + s[j]
          j++;
      };
      s = ns;
  }
  
  return s;
};

console.log(countAndSay(1));
console.log(countAndSay(2));
console.log(countAndSay(3));
console.log(countAndSay(4));
console.log(countAndSay(5));