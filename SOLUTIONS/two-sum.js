var twoSum = function (nums, target) {
  // loop through array and find target value
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
  return -1;
};

let nums = [2, 7, 11, 15],
  target = 9;
console.log("1", twoSum(nums, target));

var twoSum2 = function (nums, target) {
  let obj = {};

  for (let i = 0; i < nums.length; i++) {
    obj[nums[i]] = i;
  }

  for (let i = 0; i < nums.length; i++) {
    let res = target - obj[nums[i]];
    if (obj[res]) {
      return [obj[i], obj[res]];
    }
  }

  return -1;
};

console.log("2", twoSum2(nums, target));
