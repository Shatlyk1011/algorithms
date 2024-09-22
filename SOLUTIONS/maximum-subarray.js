const maxSubArray = function (nums) {
  // Initialize the max sum...
  let maxSum = nums[0];
  // Traverse all the element through the loop...
  for (let i = 1; i < nums.length; i++) {
    // nums[i] represents the largest sum of all subarrays ending with index i...
    // then its value should be the larger one between nums[i]...
    // nums[i-1] + nums[i] (largest sum plus current number with using prefix)...
    // calculate nums[0], nums[1]…, nums[n] while comparing each one with current largest sum...
    nums[i] = Math.max(0, nums[i - 1]) + nums[i];
    // if nums[i] > maxSum then maxSum = nums[i]...
    if (nums[i] > maxSum) {
      maxSum = nums[i];
    }
  }
  return maxSum;
};

// console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));

const maxSubArray2 = (nums) => {
  let maxSub = nums[0];
  let currSum = 0;

  for (let n of nums) {
    if (currSum < 0) {
      currSum = 0;
    }
    currSum += n;
    maxSub = Math.max(maxSub, currSum);
  }
  return maxSub;
};

// console.log(maxSubArray2([5, 4, -1, 7, 8]));

console.log(maxSubArray2([-2, 3, -1, 4, -2, -1, 2]));