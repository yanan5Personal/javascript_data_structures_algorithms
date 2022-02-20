const Stack = require("../stack");
function isParenthesisValid(parenthesis) {
  let parenthesisStack = new Stack();
  for (let strIndex = 0; strIndex < parenthesis.length; strIndex++) {
    const char = parenthesis.charAt(strIndex);
    if (char === "(") {
      parenthesisStack.push(char);
    } else if (char === ")") {
      if (parenthesisStack.isEmpty()) {
        return false;
      }
      parenthesisStack.pop();
    }
  }
  return parenthesisStack.isEmpty();
}

module.exports = isParenthesisValid;
