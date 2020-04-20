function Node() {
  this.edges = new Array(26).fill(false);
  this.isWord = false;
}

/**
 * Initialize your data structure here.
 */
var Trie = function () {
  this.root = new Node();
};

/**
 * Inserts a word into the trie.
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function (word) {
  let idx = 0;
  let head = this.root;
  while (idx < word.length) {
    const pos = word.charCodeAt(idx++) - "a".charCodeAt(0);
    if (!head.edges[pos]) {
      head.edges[pos] = new Node();
    }
    head = head.edges[pos];
  }
  head.isWord = true;
};

/**
 * Returns if the word is in the trie.
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function (word) {
  let head = this.root;
  let idx = 0;
  while (idx < word.length) {
    const pos = word.charCodeAt(idx++) - "a".charCodeAt(0);
    if (!head.edges[pos]) return false;
    head = head.edges[pos];
  }
  return head.isWord;
};

/**
 * Returns if there is any word in the trie that starts with the given prefix.
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function (prefix) {
  let head = this.root;
  let idx = 0;
  while (idx < prefix.length) {
    const pos = prefix.charCodeAt(idx++) - "a".charCodeAt(0);
    if (!head.edges[pos]) return false;
    head = head.edges[pos];
  }
  return true;
};


const trie = new Trie();

trie.insert("apple");
console.log(trie.search("apple")); // returns true
console.log(trie.search("app")); // returns false
console.log(trie.startsWith("app")); // returns true
trie.insert("app");
console.log(trie.search("app")); // returns true
