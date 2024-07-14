// isPalindrome
const isPalindrome = (str) => {
  const fixedStr = str.match(/[a-z]/gi).join("");

  let left = 0;
  let right = fixedStr.length - 1;

  while (left < right) {
    if (fixedStr[left] !== fixedStr[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
};

console.log(isPalindrome("hellolleh!!"));

// isPalindrome 2
const isPalindrome2 = (s) => {
  return s === s.split("").reverse().join("");
};

console.log(isPalindrome2("hellolleh"));
