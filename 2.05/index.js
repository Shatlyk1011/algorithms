/////////////////// 1 DUBLICATE
var containsDuplicate = function (nums) {
  const set = new Set();

  for (let num of nums) {
    if (set.has(num)) return true;
    set.add(num);
  }
  return false;
};

const s = "rat",
  t = "tar";

/////////////////// 2 ANAGRAM
var isAnagram = function (s, t) {
  const obj1 = {};
  const obj2 = {};

  for (let char of s) {
    obj1[char] = obj1[char] + 1 || 1;
  }

  for (let char of t) {
    obj2[char] = obj2[char] + 1 || 1;
  }

  const obj1Vals = Object.keys(obj1);
  const obj2Vals = Object.keys(obj2);

  if (obj1Vals.length !== obj2Vals.length) return false;

  for (let key of obj1Vals) {
    if (obj1[key] !== obj2[key]) return false;
  }

  return true;
};

/////////////////// 3 TWO SUM
var twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
};
