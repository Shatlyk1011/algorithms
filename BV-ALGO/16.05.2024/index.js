//✅ ❌ 🌱 - template

// https://leetcode.com/problems/remove-outermost-parentheses/description/ ❌
// var removeOuterParentheses = function (s) {
//   const strs = "";
//   for (let char of s) {
//   }
// };

// console.log(removeOuterParentheses("(()())(())"));
// Output: "()()()"

// https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string 🌱
var removeDuplicates = function (s) {
  let arr = [];
  arr[0] = s.charAt(0);
  for (let i = 1; i < s.length; i++) {
    if (arr[i - 1] == s.charAt(i)) {
      arr.pop();
    } else arr.push(s[i]);
  }
  return arr.join("");
};
console.log(removeDuplicates("heheee"));
