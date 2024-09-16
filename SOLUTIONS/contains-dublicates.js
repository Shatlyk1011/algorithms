// Contains dublicates
const containsDuplicate = function (nums) {
  let map = {};

  for (let idx of nums) {
    if (map[nums[idx]]) return true;
    else map[nums[idx]] = 1;
  }
  return false;
};

// console.log(containsDuplicate([3, 3]));

// Contains dublicates (BEST)
const containsDuplicate2 = (nums) => {
  return [...new Set(nums)].length !== nums.length;
};

// console.log(containsDuplicate2([3, 3]));

var containsDuplicate3 = function (nums) {
  const hash = {};

  for (let n of nums) {
    hash[n] = hash[n] + 1 || 1;
  }
  console.log('hash',hash)
  for (let n in hash) {
    console.log('n', n)
    if (hash[n] > 1) {
      return true;
    }
  }

  return false;
};

console.log(containsDuplicate3([4, 1, 2, 3]));