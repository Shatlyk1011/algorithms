// return the number which appears most

const majorityElement = function (nums) {
  let obj = {};
  let majorKey = 0;
  let majorValue = 0;

  for (let i = 0; i < nums.length; i++) {
    const curr = nums[i];
    obj[curr] = obj[curr] + 1 || 1;
  }

  for (let key in obj) {
    if (obj[key] > majorValue) {
      majorValue = obj[key];
      majorKey = key;
    }
  }

  return majorKey;
};

console.log(majorityElement([3, 2, 3]));
console.log(majorityElement([2, 2, 1, 1, 1, 2, 2]));
