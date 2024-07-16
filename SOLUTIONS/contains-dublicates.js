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

console.log(containsDuplicate2([3, 3]));
