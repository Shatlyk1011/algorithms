class Stack {
  constructor() {
    this.stack = [];
  }

  push(val) {
    this.stack[this.stack.length] = val;
    return this.stack.length;
  }

  pop() {
    if (this.isEmpty()) {
      return "empty array";
    }
    const lastEl = this.stack[this.stack.length - 1];
    this.stack.length--;
    return lastEl;
  }

  peek() {
    return this.stack[this.stack.length - 1];
  }

  isEmpty() {
    return this.stack.length === 0;
  }

  size() {
    return this.stack.length;
  }
}

const stack = new Stack();

// console.log(stack.isEmpty()); // Checks if the stack is empty
// console.log(stack.push(10)); // Adds an element to the top of the stack
// console.log(stack.push(30)); // Adds an element to the top of the stack
// console.log(stack.push(50)); // Adds an element to the top of the stack
// console.log(stack.peek()); // Retrieves the element from the top of the stack without removing it.
// console.log(stack.isEmpty()); // Checks if the stack is empty
// console.log(stack.size()); // Returns the number of elements in the stack

// Sample
//https://leetcode.com/problems/valid-parentheses/

const isValid = function (s) {
  const stack = [];

  for (let i = 0; i < s.length; i++) {
    let curr = s[i];
    if (stack.length) {
      const last = stack[stack.length - 1];

      if (compare(curr, last)) {
        stack.pop();
        continue;
      }
    }

    stack.push(curr);
  }

  return stack.length === 0;
};

function compare(curr, last) {
  return (
    (last === "(" && curr === ")") ||
    (last === "{" && curr === "}") ||
    (last === "[" && curr === "]")
  );
}
// console.log(isValid("()[]{}"));
// console.log(isValid("()[]{}}{"));


// const isValid2 = (s) => {
//   const stack = [];

//   for (let i = 0; i < s.length; i++) {
//     let curr = s[i];

//     if (stack.length) {
//       const last = stack[stack.length - 1];

//       if (validate(last, curr)) {
//         stack.pop();
//         continue;
//       }
//     }

//     stack.push(curr);
//   }

//   return stack.length === 0;
// };

// const validate = (last, curr) => {
//   return (
//     (last === "(" && curr === ")") ||
//     (last === "[" && curr === "]") ||
//     (last === "{" && curr === "}")
//   );
// };

// console.log(isValid2("()[]{}"));

let arr = [1,2,3,4]
console.log("12", arr[arr.length - 1]);

