var reversePolish = function (tokens) {
  function calc(operand, val1, val2) {
    switch (operand) {
      case "+": {
        return +val1 + +val2;
      }
      case "-": {
        return val1 - val2;
      }
      case "*": {
        return val1 * val2;
      }
      case "/": {
        return val1 / val2;
      }
    }
  }
  const stack = [];

  const operators = "*/+-";

  for (let i = 0; i < tokens.length; i++) {
    if (!operators.includes(tokens[i])) {
      stack.push(tokens[i]);
      continue;
    }
    if (stack.length < 2) {
    }

    let calculated = calc(tokens[i], stack[stack.length - 2], stack[stack.length - 1]);

    stack.pop();
    stack[stack.length - 1] = tokens[i] == "/" ? Math.trunc(calculated) : calculated;
  }

  return stack[0];
};

const tokens1 = ["2", "1", "+", "3", "*"];
const tokens2 = ["4", "13", "5", "/", "+"];
const tokens3 = ["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"];

console.log(reversePolish(tokens1));
console.log(reversePolish(tokens2));
console.log(reversePolish(tokens3));
