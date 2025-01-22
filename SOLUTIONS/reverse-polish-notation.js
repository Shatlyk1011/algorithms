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



// using stack
var evalRPN = function (tokens) {
  const isOperator = (o) => {
    return o === "/" || o === "*" || o === "-" || o === "+";
  };
  const evaluate = (val1, val2, operator) => {
    switch (operator) {
      case "/": {
        return Math.truch(val1 / val2);
      }
      case "+": {
        return val1 + val2;
      }
      case "-": {
        return val1 - val2;
      }
      case "*": {
        return val1 * val2;
      }
    }
  };
  let stack = [];

  for (let i = 0; i < tokens.length; i++) {
    if (isOperator(tokens[i])) {
      const val1 = stack[stack.length - 2];
      const val2 = stack[stack.length - 1];
      const res = evaluate(+val1, +val2, tokens[i]);

      stack.pop();
      stack[stack.length - 1] = res;
    } else {
      stack.push(tokens[i]);
    }
  }

  return stack[0];
};



console.log(evalRPN(["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"]));
