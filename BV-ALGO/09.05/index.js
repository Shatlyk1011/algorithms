// Stack Data scructure (LIFO)

// Example 1:

// Input: s = "ab#c", t = "ad#c"
// Output: true
// Explanation: Both s and t become "ac".

///////////////////////////// Solution 1
// https://leetcode.com/problems/backspace-string-compare/

var backspaceCompare = function (s, t) {
  let str1 = [];
  let str2 = [];
  for (let char of s) {
    if (char !== "#") str1.push(char);
    else str1.pop();
  }

  for (let char of t) {
    if (char !== "#") str2.push(char);
    else str2.pop();
  }
  return str1.join("") === str2.join("");
};

console.log("result", backspaceCompare("xywrrmp", "xywrrmu#p"));
// console.log("result", backspaceCompare("a#c", "b"));

///////////////// Solution 3
// https://leetcode.com/problems/baseball-game/
var calPoints = function (operations) {
  let result = [];
  for (let i = 0; i < operations.length; i++) {
    let last = result.length - 1;
    switch (operations[i]) {
      case "+": {
        let sum = Number(result[last]) + Number(result[last - 1]);
        result.push(sum);
        break;
      }
      case "D": {
        let sum = result[last] * 2;
        result.push(sum);
        break;
      }
      case "C": {
        result.pop();
        break;
      }
      default: {
        result.push(Number(operations[i]));
        break;
      }
    }
  }

  return result.reduce((prev, curr) => prev + curr, null);
};
