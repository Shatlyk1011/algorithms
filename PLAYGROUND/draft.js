function twoSum(nums, target) {
  const numToIndex = new Map();
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (numToIndex.has(complement)) {
      return [numToIndex.get(complement), i];
    }
    numToIndex.set(nums[i], i);
  }
  return []; // No solution found!
}

console.log(twoSum([0, 2, 1, 1, 24, 6, 3, 4, 6, 5, 4, 4, 4], 4));
