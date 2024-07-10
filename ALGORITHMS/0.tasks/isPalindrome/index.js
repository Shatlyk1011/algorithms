// two pointers

const isPalindrome = (x) => {
  if (x < 0) return false;

  x = x.toString();

  let left = 0;
  let right = x.length - 1;

  while (left < right) {
    if (x[left] !== x[right]) {
      return false;
    }

    left++;
    right--;
  }

  return true;
};

console.log(isPalindrome(24242));

// v2
class Solution {
  /**
   * @param {string} s
   * @return {boolean}
   */
  isPalindrome(s) {
    const str = this.removePunctuation(s);

    let left = 0;
    let right = str.length - 1;

    while (left < right) {
      if (str[left] !== str[right]) {
        return false;
      }

      left++;
      right--;
    }

    return true;
  }

  removePunctuation(text) {
    var punctuation = /[\.,?!':]/g;
    var newText = text.replace(punctuation, "");
    return newText.toLowerCase().split(" ").join("");
  }
}

const sol = new Solution();

console.log(sol.removePunctuation("Was it a car or a cat I saw?"));
console.log(sol.isPalindrome("Was it a car or a cat I saw?"));
