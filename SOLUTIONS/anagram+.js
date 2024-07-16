// Advanced anagram.
//abccbabac abc = 3
const fn = (str, sub) => {
  // 1) count str obj
  // 2) count sub obj
  // 3) create count variable
  // 4) loop through sub and minus str obj val
  // 5) if loop ends, increase count
  // 6) if loop did not find , return count

  let maxLoop = Math.ceil(str.length / sub.length);

  let count = 0;

  const obj1 = {};
  const obj2 = {};

  for (let char of str) {
    obj1[char] = obj1[char] + 1 || 1;
  }

  for (let char of sub) {
    obj2[char] = obj2[char] + 1 || 1;
  }

  for (let i = 0; i < maxLoop; i++) {
    for (let char of sub) {
      if (!obj1[char]) return count;

      obj1[char] -= 1;
    }
    count++;
  }

  return count;
};

console.log(fn("aabbbcccaa", "bac"));
