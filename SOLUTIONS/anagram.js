// is Anagram v1
function isAnagram(str1, str2) {
  const obj1 = {};
  const obj2 = {};

  for (let char of str1) {
    obj1[char] = obj1[char] + 1 || 1;
  }

  for (let char of str2) {
    obj2[char] = obj2[char] + 1 || 1;
  }

  const obj1Vals = Object.values(obj1);
  const obj2Vals = Object.values(obj2);

  if (obj1Vals.length !== obj2Vals.length) return false;

  for (let char of obj1Vals) {
    if (obj1Vals[char] !== obj1Vals[char]) return false;
  }

  return true;
}

// console.log(isAnagram("qiu", "iuq"));

// is Anagram v2 (BEST)
const anagrams = (str1, str2) => {
  const str1Match = str1.match(/[a-z]/gi).join("");
  const str2Match = str2.match(/[a-z]/gi).join("");

  if (str1Match.length !== str2Match.length) return false;

  const obj1 = {};
  const obj2 = {};

  for (let char of str1Match) {
    obj1[char] = obj1[char] + 1 || 1;
  }

  for (let char of str2Match) {
    obj2[char] = obj2[char] + 1 || 1;
  }

  for (let key in obj1) {
    if (obj1[key] !== obj2[key]) {
      return false;
    }
  }

  return true;
};

console.log("anagrams", anagrams("bay bo!!", "yab ob"));
