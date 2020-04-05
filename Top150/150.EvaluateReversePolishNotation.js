/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
  if (!tokens || !tokens.length) return 0;
  const sta = [];
  for (let i = 0; i < tokens.length; i++) {
    if (
      tokens[i] === "+" ||
      tokens[i] === "-" ||
      tokens[i] === "*" ||
      tokens[i] === "/"
    ) {
      const num2 = +sta.pop();
      const num1 = +sta.pop();
      switch (tokens[i]) {
        case "+": {
          sta.push(num1 + num2);
          break;
        }
        case "-": {
          sta.push(num1 - num2);
          break;
        }
        case "*": {
          sta.push(num1 * num2);
          break;
        }
        case "/": {
          sta.push((num1 / num2) | 0);
          break;
        }
      }
    } else {
      sta.push(tokens[i]);
    }
  }

  return sta[0];
};